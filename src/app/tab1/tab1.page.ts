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

  chords: { id: number, tabName: string }[] = [
    {
      id: 0,
      tabName: 'C#',
    },
    {
      id: 1,
      tabName: 'A',
    },
    {
      id: 2,
      tabName: 'BM7',
    },
    {
      id: 3,
      tabName: 'D#m7',
    },
  ]
}
