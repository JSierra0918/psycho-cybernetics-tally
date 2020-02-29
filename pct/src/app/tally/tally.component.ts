import { Component, OnInit } from "@angular/core";
import { getLocaleDateTimeFormat } from '@angular/common';

// import userDataJ from '../localStorage/userData.json';

//decorator
@Component({
    selector: 'app-tally',
    templateUrl: 'tally.html',
    styleUrls: ['tally.scss'],
})

export class Tally implements OnInit {
    userData: any[];

    // template Tutorial
    loginText = 'Login';
    signUpText = 'Sign Up';
    lessons:Array<String> = ['Lesson 1', 'Lessons 2'];
    testCount: number = 10;

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
        console.log(`Today is ${new Intl.DateTimeFormat('en-US').format(new Date())}`);
    }
    //====================================================================== TEMPLATED END

    constructor() { }

    ngOnInit() {
        const dateTime: Date = new Date();
        const created: String = `${dateTime.getUTCMonth() + 1} - ${dateTime.getDay} - ${dateTime.getUTCFullYear()}`;
        console.log(`${dateTime.getUTCMonth() + 1} - ${dateTime.getDay} - ${dateTime.getUTCFullYear()}`);

        this.userData = 
        [
            {
                id: 0,
                title: "Title1",
                count: 0,
                created
            },
            {
                id: 1,
                title: "Title2",
                count: 0,
                created: created
            }
        ]
    }

    increaseCount(e,index: number) {
        console.log("EVENT PROP")
        const specificUserData = this.userData[index];
        specificUserData.count++;
    }

    tapEvent(e) {
        console.log(e);
        console.log("TAP!");
    }

    goToStats(event:Event, index: number) {
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
