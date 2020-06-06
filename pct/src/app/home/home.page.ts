import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newProfile = false;  
  constructor() {}

  addHabit(event) {
    this.newProfile = !this.newProfile;
  }
}
