# conda install google-api-python-client google-auth-httplib2 google-auth-oauthlib pandas numpy
import os
import json
import pickle
import numpy as np
import requests
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

import rch


def create_google_api_service(token_pickle, creds_json):
    # the spreadsheet info
    scopes = ['https://www.googleapis.com/auth/spreadsheets']

    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is created automatically when the
    # authorization flow completes for the first time.
    if os.path.exists(token_pickle):
        with open(token_pickle, 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(creds_json, scopes)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open(token_pickle, 'wb') as token:
            pickle.dump(creds, token)

    return build('sheets', 'v4', credentials=creds)


def get_new_movie_from_tmdb(df, tmdb_api_key):
    fails = []
    url = 'https://api.themoviedb.org/3/search/movie?'
    for movie in df['Movie']:
        if df.loc[df['Movie'] == movie, 'idTMDB'].values[0] == '':
            params = {
                'query': movie,
                'language': 'en-US',
                'api_key': tmdb_api_key,
            }
            try:
                data = requests.get(url, params).json()
                df.loc[df['Movie'] == movie, 'idTMDB'] = data['results'][0]['id']
                poster_name = str(data['results'][0]['poster_path']).replace('/', '').replace('.jpg', '')
                df.loc[df['Movie'] == movie, 'Poster'] = poster_name
            except Exception as e:
                fails.append(movie)
    print(f'Failed to retieve information for {fails}')
    return df


def update_movie_information(movie_df, tmdb_api_key):
    for movie in movie_df['Movie']:
        url = f"https://api.themoviedb.org/3/movie/{movie_df.loc[movie_df['Movie'] == movie, 'idTMDB'].values[0]}?"
        params = {'language': 'en-US', 'api_key': tmdb_api_key, }
        try:
            data = requests.get(url, params).json()
            movie_df.loc[movie_df['Movie'] == movie, 'Poster'] = data['poster_path']
            movie_df.loc[movie_df['Movie'] == movie, 'time'] = data['runtime']
        except Exception:
            print('Movie information not found:   {0}'.format(movie))

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
        tmdb_api_key = json.loads(f.read())['v3token']

    # inititate google api service object
    google_api_service = create_google_api_service(token_pickle_path, credentials_json_path)

    # read my spreadsheet
    sheet_id = '1IwN6augG0fm6NG8-ddhMmBrinTOpgyCnNvLKCFJA4bI'
    df_r = rch.web.read_google_sheet(google_api_service, sheet_id, 'MovieList!A:L', skip_cols=1)
    df_r.rename(columns={'MA': 'onGoogle', 'UV': 'onFandango', 'uhd': 'uhd', 'file': 'file'}, inplace=True)
    del df_r['onlyon']

    # zach's google sheet
    sheet_id = '1iYR2OP20d9RUlmEPsCdN3ksHRWJTfNh59Bph3Lv_GVw'
    df_z = rch.web.read_google_sheet(google_api_service, sheet_id, 'Movies!A:H', skip_rows=(1, 2))
    df_z.rename(columns={'Title': 'Movie', '3D Blu-ray': 'is3D', 'Google Play': 'onGoogle',
                         'Vudu': 'onFandango', '4K UHD': 'uhd'}, inplace=True)
    del df_z['Movies Anywhere']
    df_z.drop(index=max(df_z.index), inplace=True)

    # # merge the two sheets together
    # df_r = df_r.merge(df_z, how='outer', on=['Movie', 'onGoogle', 'Blu-ray', 'DVD', 'onFandango', 'isUHD'])
    # # combine duplicate row entries
    # df_r = df_r.groupby('Movie', as_index=False).aggregate('first')
    # df_r.sort_values('Movie', inplace=True)
    # df_r = df_r.reindex(columns=df_r.columns)
    # # merge bluray and dvd columns into the disc column
    # df_r['onDisc'] = df_r['Blu-ray'].combine_first(df_r['DVD'])
    # del df_r['Blu-ray'], df_r['DVD']
    # df_r.replace(np.nan, '', inplace=True)

    # read the master sheet
    sheet_id = '1STMqN8zF0rUsskwK5FCGFrmLRy_rdLd900_blI-T49s'
    sheet_range = 'Sheet1!A:K'
    df_m = rch.web.read_google_sheet(google_api_service, sheet_id, sheet_range)
    print(df_m)
    print(df_m.columns)

    # merge the new data with the master google sheet
    df_m = df_m.merge(df_r, how='outer')
    print(df_m.columns)
    # combine duplicate row entries
    df_m = df_m.groupby('Movie', as_index=False).aggregate('first')
    df_m.sort_values('Movie', inplace=True)
    # df_m = df_m.reindex(columns=df_r.columns)

    # fill in missing information about the movies from the tmdb api
    df_m = get_new_movie_from_tmdb(df_m, tmdb_api_key)
    # df_m = update_movie_information(df_m, tmdb_api_key)
    df_m['idTMDB'] = df_m['idTMDB'].astype(int, errors='ignore')
    df_m['time'] = df_m['time'].astype(int, errors='ignore')

    # get a preview
    print(df_m)
    print(df_m.columns)

    # export the new master sheet to google sheets
    # rch.web.write_google_sheet(df_m, google_api_service, sheet_id, sheet_range)

    # create a js file which the website will use
    df_m.index = df_m['Movie']
    del df_m['Movie']
    with open('mvdb.json', 'w') as f:
        f.write(df_m.to_json(orient='index'))
