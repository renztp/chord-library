import { Injectable } from '@angular/core';

@Injectable()
export class ChordsService {
  name(chordName: string) {
    return chordName;
  }
}
