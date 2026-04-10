import { Controller } from '@nestjs/common';
import { ChordService } from './chord.service';

@Controller('chord')
export class ChordController {
  constructor(private readonly chordService: ChordService) {}
}
