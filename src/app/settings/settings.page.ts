import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
  lightMode = false;

  get themeLabel(): string {
    return this.lightMode ? 'Light mode' : 'Dark mode';
  }
}
