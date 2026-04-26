import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() { }

  shouldShowButton() {
    const currentRoute = this.router.url;
    return currentRoute.includes('/settings');
  }

  goBack() {
    this.location.back();
  }

}
