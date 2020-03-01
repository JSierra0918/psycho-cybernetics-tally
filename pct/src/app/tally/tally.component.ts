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
    userData: Array<Users>[] = [];
    //added static number to see if I don't need the closure function
    static staticIdNumber: number = 0;

    // template Tutorial
    loginText = 'Login';
    signUpText = 'Sign Up';
    testCount: number = 10;

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
        console.log(`Today is ${new Intl.DateTimeFormat('en-US').format(new Date())}`);
    }

    handleIDCounter() {
        let idNumber: number = 0;
        return function increaseID() {
            idNumber += 1
            return idNumber;
        };
    }

    // This is temporary could replace ID counter function
    handleIDCounterStatic() {
        this.staticIdNumber++;
    }
    //====================================================================== TEMPLATED END

    constructor() { }

    ngOnInit() {
        const dateTime: Date = new Date();
        const created: String = `${dateTime.getUTCMonth() + 1} - ${dateTime.getDay} - ${dateTime.getUTCFullYear()}`;
        const infiniteIDCounter = this.handleIDCounter();
        console.log(`${dateTime.getUTCMonth() + 1} - ${dateTime.getDay} - ${dateTime.getUTCFullYear()}`);

        this.userData =
            [
                {
                    id: infiniteIDCounter(),
                    title: "Title1",
                    count: 0,
                    created
                },
                {
                    id: infiniteIDCounter(),
                    title: "Title2",
                    count: 0,
                    created: created
                }
            ]
    }

    increaseCount(event: Event, index) {
        console.log("EVENT PROP")
        const specificUserData = this.userData[index];
        specificUserData.count++;
    }

    tapEvent(e) {
        console.log(e);
        console.log("TAP!");
    }

    goToStats(event: Event, index: number) {
        console.log(event)
        // event.preventDefault();
        event.stopPropagation()
        const specificUserData = this.userData[index];
        //workaround for stopPropagation not working.
        // console.log('GoToStats:', specificUserData.title + specificUserData.count--, index, this.testCount)
        specificUserData.count--;
        //send user to statistics page

    }
}
