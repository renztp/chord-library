import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChordItemComponent } from './chord-item.component';

@NgModule({
  declarations: [ChordItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [ChordItemComponent]
})
export class ChordItemModule { }
