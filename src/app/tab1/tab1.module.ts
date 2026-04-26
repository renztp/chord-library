import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChordItemModule } from "../components/chord-item/chord-item.module";
import { HeaderModule } from "../components/header/header.module";
import { ChordsService } from '../services/chords/chords.service';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ChordItemModule,
    HeaderModule
  ],
  declarations: [Tab1Page],
  providers: [ChordsService]
})
export class Tab1PageModule { }
