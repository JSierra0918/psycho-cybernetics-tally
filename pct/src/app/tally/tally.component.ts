import { Component, OnInit } from "@angular/core";
import { getLocaleDateTimeFormat } from '@angular/common';

import { Users } from '../model/user';

// import userDataJ from '../localStorage/userData.json';

//decorator
@Component({
    selector: 'app-tally',
    templateUrl: 'tally.html',
    styleUrls: ['tally.scss'],
})

export class Tally implements OnInit {
    users: Users[] = [];

    //added static number to see if I don't need the closure function
    static staticIdNumber: number = 0;

    constructor() { }

    ngOnInit() {
        const currentDate: Date = new Date();
        const month = currentDate.getMonth();
        const day = currentDate.getDay();
        const year = currentDate.getFullYear();
        const created: string = `${month}/${day} / ${year}`;
        // set user data for testing purposes
        this.users =
            [
                {
                    id: this.handleIDCounterStatic(),
                    title: "Title1",
                    count: 0,
                    created
                },
                {
                    id: this.handleIDCounterStatic(),
                    title: "Title2",
                    count: 0,
                    created: created
                }
            ]

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

    tapEvent(e) {
        console.log(e);
        console.log("TAP!");
    }

    goToStats(event: Event, index: number) {
        console.log(event)
        // event.preventDefault();
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

    // This is temporary could replace ID counter function
    handleIDCounterStatic(): number {
        const id = Tally.staticIdNumber++;
        return id;
    }
}
