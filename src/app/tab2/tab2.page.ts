import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  newTabForm = new FormGroup({
    tabName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    key: new FormControl('', { nonNullable: true }),
    photo: new FormControl<File | null>(null, [Validators.required])
  });

  onSubmit() {
    console.log(this.newTabForm.value)
  }

  constructor() { }
}
