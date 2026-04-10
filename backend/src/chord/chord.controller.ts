import { Controller, Get } from '@nestjs/common';
import { ChordService } from './chord.service';

@Controller('chord')
export class ChordController {
  constructor(private readonly chordService: ChordService) { }

  @Get()
  async queryGoogleSheets(): Promise<any> {
    return await this.chordService.queryLibrarySheets();
  }
}
