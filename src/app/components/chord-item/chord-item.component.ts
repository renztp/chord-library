import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chord-item',
  templateUrl: './chord-item.component.html',
  styleUrls: ['./chord-item.component.scss'],
  standalone: false
})
export class ChordItemComponent {
  @Input() chordName: string = '';
  @Input() chordImage: string = '';
  @Input() chordId: number = 0;

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.chordId);
  }

  onDelete() {
    this.delete.emit(this.chordId);
  }
}
