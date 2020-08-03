# conda install google-api-python-client google-auth-httplib2 google-auth-oauthlib pandas numpy
import os
import json
import pickle
import pandas as pd
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


def read_google_sheet(service: build, sheet_id: str, sheet_range: str,
                      filter_columns: int or list or tuple = None,
                      filter_rows: int or list or tuple = None,
                      columns_labeled: bool = True) -> pd.DataFrame:
    # Call the Sheets API to get the spreadsheet data
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=sheet_id, range=sheet_range).execute()
    values = result.get('values', [])

    # make all the rows the same length
    length = max(map(len, values))
    array = np.array([xi + [''] * (length - len(xi)) for xi in values])

    if filter_rows is not None:
        array = np.delete(array, np.asarray(filter_rows) - 1, axis=0)  # subtract 1 -> sheets start at 1, np at 0
    if filter_columns is not None:
        array = np.delete(array, np.asarray(filter_columns) - 1, axis=1)

    if columns_labeled:
        columns = array[0]
        array = np.delete(array, 0, axis=0)
        return pd.DataFrame(array, columns=columns)
    else:
        return pd.DataFrame(array)


def read_zachs_csv_from_google_drive(service, sheet_id, sheet_range):
    # Call the Sheets API to get the spreadsheet data
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=sheet_id, range=sheet_range).execute()
    values = result.get('values', [])

    # make all the rows the same length
    length = max(map(len, values))
    array = np.array([xi + [''] * (length - len(xi)) for xi in values])

    # delete the counter column, get the column names then delete them
    array = np.delete(array, (0, 1), axis=0)
    columns_labels = array[0]
    array = np.delete(array, (0, array.shape[0] - 1), axis=0)

    return pd.DataFrame(array, columns=columns_labels)


def get_new_movie_from_tmdb(df, tmdb_api_key):
    fails = []
    url = 'https://api.themoviedb.org/3/search/movie?'
    for movie in df['Movie']:
        if df.loc[df['Movie'] == movie, 'TMDB-ID'].values[0] == '':
            params = {
                'query': movie,
                'language': 'en-US',
                'api_key': tmdb_api_key,
            }
            try:
                data = requests.get(url, params).json()
                df.loc[df['Movie'] == movie, 'TMDB-ID'] = data['results'][0]['id']
                poster_name = str(data['results'][0]['poster_path']).replace('/', '').replace('.jpg', '')
                df.loc[df['Movie'] == movie, 'Poster'] = poster_name
            except Exception as e:
                fails.append(movie)
    return df


def update_movie_poster_path(movie_df, tmdb_api_key):
    for movie in movie_df['Movie']:
        url = f"https://api.themoviedb.org/3/movie/{movie_df.loc[movie_df['Movie'] == movie, 'TMDB-ID'].values[0]}?"
        params = {'language': 'en-US', 'api_key': tmdb_api_key, }
        try:
            data = requests.get(url, params).json()
            movie_df.loc[movie_df['Movie'] == movie, 'Poster'] = data['poster_path']
        except Exception:
            print('Poster not found:   {0}'.format(movie))

    return movie_df


def update_google_sheets(service, sheet_id, sheet_range, df):
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
    base_path = os.path.dirname(__file__)
    posters_dir = os.path.join(os.path.dirname(os.path.dirname(base_path)), 'assets', 'MoviePosters')

    token_pickle_path = os.path.join(os.path.dirname(base_path), 'api_credentials', 'token.pickle')
    credentials_json_path = os.path.join(os.path.dirname(base_path), 'api_credentials', 'sheetscredentials.json')
    with open(os.path.join(os.path.dirname(base_path), 'api_credentials', 'tmdb_tokens.json'), 'r') as f:
        tmdb_api_key = json.loads(f.read())
        tmdb_api_key = tmdb_api_key['v3token']

    # inititate google api service object
    google_api_service = create_google_api_service(token_pickle_path, credentials_json_path)

    # read my spreadsheet
    sheet_id = '1IwN6augG0fm6NG8-ddhMmBrinTOpgyCnNvLKCFJA4bI'
    sheet_read_range = 'MovieList!A:L'
    sheet_write_range = 'MovieList!B:L'
    df_r = read_google_sheet(google_api_service, sheet_id, sheet_read_range, filter_columns=1)

    # zach's google sheet
    sheet_id = '1iYR2OP20d9RUlmEPsCdN3ksHRWJTfNh59Bph3Lv_GVw'
    sheet_read_range = 'Movies!A:H'
    sheet_write_range = 'Movies!A:H'
    df_z = read_zachs_csv_from_google_drive(google_api_service, sheet_id, sheet_read_range)

    # merge the two sheets together
    df_z.rename(columns={'Title': 'Movie', 'Movies Anywhere': 'MA', }, inplace=True)
    df_r = df_r.merge(df_z, how='outer', on=['Movie', 'MA', 'Blu-ray', 'DVD'])
    df_r = df_r.groupby('Movie', as_index=False).aggregate('first')
    df_r.sort_values('Movie', inplace=True)
    df_r = df_r.reindex(columns=df_r.columns)
    df_r.replace(np.nan, '', inplace=True)

    # read the master sheet
    sheet_id = '1STMqN8zF0rUsskwK5FCGFrmLRy_rdLd900_blI-T49s'
    sheet_read_range = 'Sheet1!A:O'
    sheet_write_range = 'Sheet1!A:O'
    df_m = read_google_sheet(google_api_service, sheet_id, sheet_read_range, columns_labeled=True)

    # todo merge the master sheet with mine and zach's sheet

    # get information about the movies from the tmdb api
    df_m = get_new_movie_from_tmdb(df_m, tmdb_api_key)
    df_m['TMDB-ID'] = df_m['TMDB-ID'].astype(int, errors='ignore')

    # export the new master sheet to google sheets
    update_google_sheets(google_api_service, sheet_id, sheet_write_range, df_m)

    # create a js file which the website will use
    print(df_m)
    print(df_m['Poster'])
    df_to_js(df_m, os.path.join(os.path.dirname(os.path.dirname(base_path)), 'movies', 'mvdb.js'))
