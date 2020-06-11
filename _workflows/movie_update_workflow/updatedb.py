# conda install google-api-python-client google-auth-httplib2 google-auth-oauthlib pandas numpy
import os
import json
import pickle
import pandas
import numpy as np
import requests
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request


def create_google_api_service(token_pickle_path, credentials_json_path):
    # the spreadsheet info
    scopes = ['https://www.googleapis.com/auth/spreadsheets']

    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is created automatically when the
    # authorization flow completes for the first time.
    if os.path.exists(token_pickle_path):
        with open(token_pickle_path, 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(credentials_json_path, scopes)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open(token_pickle_path, 'wb') as token:
            pickle.dump(creds, token)

    return build('sheets', 'v4', credentials=creds)


def read_csv_from_google_drive(service, sheet_id, sheet_range):
    # Call the Sheets API to get the spreadsheet data
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=sheet_id, range=sheet_range).execute()
    values = result.get('values', [])

    # make all the rows the same length
    length = max(map(len, values))
    array = np.array([xi+['']*(length-len(xi)) for xi in values])

    # delete the counter column, get the column names then delete them
    array = np.delete(array, 0, axis=1)
    columns_labels = array[0]
    array = np.delete(array, 0, axis=0)

    return pandas.DataFrame(array, columns=columns_labels)


def get_new_movie_from_tmdb(df, tmdb_api_key):
    fails = []
    url = 'https://api.themoviedb.org/3/search/movie?'
    for movie in df['Movie']:
        if df.loc[df['Movie'] == movie, 'ID'] == '':
            params = {
                'query': movie,
                'language': 'en-US',
                'api_key': tmdb_api_key,
            }
            try:
                data = requests.get(url, params).json()
                df.loc[df['Movie'] == movie, 'ID'] = data['results'][0]['id']
                df.loc[df['Movie'] == movie, 'Poster'] = data['results'][0]['poster_path']
            except Exception:
                fails.append(movie)
    print(fails)
    return df


def update_movie_poster_path(movie_df, tmdb_api_key):
    for movie in movie_df['Movie']:
        url = 'https://api.themoviedb.org/3/movie/{0}?'.format(
            movie_df.loc[movie_df['Movie'] == movie, 'TMDB-ID'].values[0])
        params = {
            'language': 'en-US',
            'api_key': tmdb_api_key,
        }
        try:
            data = requests.get(url, params).json()
            movie_df.loc[movie_df['Movie'] == movie, 'Poster'] = data['poster_path']
        except Exception:
            print(data)
            print('Poster not found:   {0}'.format(movie))

    return movie_df


def update_google_sheets(service, sheet_id, sheet_range,df):
    col = np.asarray(df.columns)
    col = col.reshape(1, len(col))
    body = df.to_numpy()
    body = {'values': np.vstack((col, body)).tolist()}
    result = service.spreadsheets().values().update(
        spreadsheetId=sheet_id, range=sheet_range, valueInputOption='RAW', body=body).execute()
    print('{0} cells updated.'.format(result.get('updatedCells')))
    return


def df_to_js(df, js):
    # format for outputting a json
    df.index = df['Movie']
    del df['Movie']
    with open(js, 'w') as f:
        f.write('mvdb=' + df.to_json(orient='index') + ';')
    return


def download_posters(movie_df, movie_poster_dir):
    for poster_url in movie_df['Poster']:
        url = f'https://image.tmdb.org/t/p/w500{poster_url}'
        name = movie_df.loc[movie_df['Poster'] == poster_url, 'Movie'].values[0]
        name = str(name).lower().replace(' ', '_')
        file_path = os.path.join(movie_poster_dir, f'{name}.jpg')
        # download the file
        try:
            with requests.get(url, stream=True) as r:
                r.raise_for_status()
                with open(file_path, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=10240):
                        if chunk:
                            f.write(chunk)
        except Exception as e:
            print(f'Failed to download poster:   {name}')
            print(e)


if __name__ == '__main__':
    sheet_id = '1IwN6augG0fm6NG8-ddhMmBrinTOpgyCnNvLKCFJA4bI'
    sheet_read_range = 'MovieList!A:L'
    sheet_write_range = 'MovieList!B:L'

    base_path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

    posters_dir = os.path.join(base_path, 'assets', 'MoviePosters')

    workflow_path = os.path.join(base_path, '_workflows', 'movie_update_workflow')
    token_pickle_path = os.path.join(workflow_path, 'token.pickle')
    credentials_json_path = os.path.join(workflow_path, 'sheetscredentials.json')
    # with open(os.path.join(workflow_path, 'tmdb_tokens.json'), 'r') as f:
    #     tmdb_api_key = json.load(f)['v3token']

    google_api_service = create_google_api_service(token_pickle_path, credentials_json_path)
    df = read_csv_from_google_drive(google_api_service, sheet_id, sheet_read_range)
    # download_posters(df, posters_dir)
    # df = get_id_url_from_tmdb(df, tmdb_api_key)
    # df = update_movie_poster_path(df, tmdb_api_key)
    update_google_sheets(google_api_service, sheet_id, sheet_write_range, df)
    df_to_js(df, os.path.join(base_path, 'movies', 'mvdb.js'))
