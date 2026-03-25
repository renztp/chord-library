import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() { }

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
