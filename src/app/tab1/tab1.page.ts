import { Component, signal } from '@angular/core';
import { ChordsService } from '../services/chords/chords.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {

  count = signal(0);
  chordName: string;

  incrementCount() {
    this.count.update(count => count + 1);
  }

  constructor(private chordService: ChordsService) {
    this.chordName = this.chordService.name("C#");
    console.log(this.chordName);
  }

  chords: { id: number, chordName: string, chordImage: string; }[] = [
    {
      id: 0,
      chordName: 'C#',
      chordImage: 'yo',
    },
    {
      id: 1,
      chordName: 'A',
      chordImage: 'yo',
    },
    {
      id: 2,
      chordName: 'BM7',
      chordImage: 'yo',
    },
    {
      id: 3,
      chordName: 'D#m7',
      chordImage: 'yo',
    },
  ];
}
