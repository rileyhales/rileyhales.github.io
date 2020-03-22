# conda install google-api-python-client google-auth-httplib2 google-auth-oauthlib pandas
import os
import pickle
import pandas
import numpy
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request


def retrieve_csv_from_google_drive():
    # the spreadsheet info
    scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    sheetID = '1IwN6augG0fm6NG8-ddhMmBrinTOpgyCnNvLKCFJA4bI'
    sheetrange = 'MovieList!A:K'

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
            flow = InstalledAppFlow.from_client_secrets_file('sheetscredentials.json', scopes)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API to get the spreadsheet data
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=sheetID, range=sheetrange).execute()
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

    # format for outputting a json
    df.index = df['Movie']
    del df['Movie']
    df.to_json('mvdb.json', orient='index')

    return df


retrieve_csv_from_google_drive()