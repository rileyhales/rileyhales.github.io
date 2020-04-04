# conda install google-api-python-client google-auth-httplib2 google-auth-oauthlib pandas
import os
import pickle
import pandas
import numpy
import requests
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request


def read_csv_from_google_drive(sheet_id, sheet_range, credentials_json_path):
    # the spreadsheet info
    scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']

    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is created automatically when the
    # authorization flow completes for the first time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(credentials_json_path, scopes)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API to get the spreadsheet data
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=sheet_id, range=sheet_range).execute()
    values = result.get('values', [])

    # make all the rows the same length
    length = max(map(len, values))
    array = numpy.array([xi+['']*(length-len(xi)) for xi in values])

    # delete the counter column, get the column names then delete them
    array = numpy.delete(array, 0, axis=1)
    columns_labels = array[0]
    array = numpy.delete(array, 0, axis=0)

    # replace the cells with True/False
    # array[array == ''] = False
    # array[array == 'x'] = True

    df = pandas.DataFrame(array, columns=columns_labels)
    print(df.head())
    # df.to_csv('db.csv', index=False)

    return df


def get_id_url_from_tmdb(df, tmdb_api_key):
    movielist = list(df['Movie'])
    fails = []

    url = 'https://api.themoviedb.org/3/search/movie?'
    for movie in movielist:
        print(df.loc[df['Movie'] == movie, 'ID'])
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


def update_google_drive_sheet(sheet_id, sheet_range, credentials_json_path, df):
    return


def df_to_json(df):
    # format for outputting a json
    df.index = df['Movie']
    del df['Movie']
    df.to_json('mvdb.js', orient='index')
    with open('mvdb.js', 'r') as f:
        db = f.readline()
    with open('mvdb.js', 'w') as f:
        f.write('mvdb=' + db + ';')


if __name__ == '__main__':
    sheet_id = '1IwN6augG0fm6NG8-ddhMmBrinTOpgyCnNvLKCFJA4bI'
    sheet_range = 'MovieList!A:K'
    credentials_json_path = 'sheetcredentials.json'
    tmdb_api_key = ''

    df = read_csv_from_google_drive(sheet_id, sheet_range, credentials_json_path)
    # df = get_id_url_from_tmdb(df, tmdb_api_key)
    # update_google_drive_sheet(df)
    df_to_json(df)
