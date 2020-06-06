import { Component, OnInit, Input } from "@angular/core";
import { getLocaleDateTimeFormat } from '@angular/common';

import { User } from '../model/user';
import { StorageService } from '../services/storage.service';

// import userDataJ from '../localStorage/userData.json';

//decorator
@Component({
    selector: 'app-tally',
    templateUrl: 'tally.html',
    styleUrls: ['tally.scss'],
})

export class Tally implements OnInit {
    users: User[] = [];
    profileKey:string = 'profile';
    //added static number to see if I don't need the closure function
    
    @Input() displayProfileForm;

    constructor(private storage: StorageService) { }

    ngOnInit() { 
        this.storage.getItem(this.profileKey).subscribe(item => this.users = item);
    }

    increaseCount(event, index) {
        event.stopImmediatePropagation();

        const specificUserData = this.users[index];
        specificUserData.count++;
    }

    decreaseCount(event, index) {
        event.stopImmediatePropagation();

        const specificUserData = this.users[index];
        specificUserData.count--;
    }

    goToStats(event: Event, index: number) {
        event.stopPropagation()
        const specificUserData = this.users[index];
        //workaround for stopPropagation not working.
    }

    handleIDCounter() {
        let idNumber: number = 0;
        return function increaseID() {
            idNumber += 1
            return idNumber;
        };
    }

    async getData():Promise<void> {
        const data = await this.storage.getItem(this.profileKey);
      }

    // This is temporary could replace ID counter function
  
}
