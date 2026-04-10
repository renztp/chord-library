import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Auth, google } from 'googleapis'

@Injectable()
export class ChordService {
  constructor(private configService: ConfigService) { }

  async queryLibrarySheets() {
    try {
      const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

      const sheets: any = google.sheets({ version: 'v4', auth });

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: this.configService.get<string>('SHEET_ID'),
        range: 'library!A1:J11'
      })

      return response;
    } catch (err) {
      console.error("Somethihng went wrong", err);
    }
  }
}
