import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChordItemComponent } from './chord-item.component';

describe('ChordItemComponent', () => {
  let component: ChordItemComponent;
  let fixture: ComponentFixture<ChordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChordItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit edit event with chord id', () => {
    spyOn(component.edit, 'emit');
    component.chordId = 1;
    component.onEdit();
    expect(component.edit.emit).toHaveBeenCalledWith(1);
  });

  it('should emit delete event with chord id', () => {
    spyOn(component.delete, 'emit');
    component.chordId = 1;
    component.onDelete();
    expect(component.delete.emit).toHaveBeenCalledWith(1);
  });
});
