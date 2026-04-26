import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChordService {
  constructor(private configService: ConfigService) { }
}
