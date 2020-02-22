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
        console.log("hello")

        this.userData = 
        [
            {
                id: 0,
                title: "Title1",
                count: 0,
                created: created
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
        const specificUserData = this.userData[index];
        console.log('specificUserData:', specificUserData);
        console.log(e.target, e.target.count)
        specificUserData.count++;
    }

    tapEvent(e) {
        console.log(e);
        console.log("TAP!");
    }

    goToStats(e:Event, index: number) {
        const specificUserData = this.userData[index];
        console.log(e);
        //workaround for stopPropagation not working.
        specificUserData.count--;
        // e.stopPropagation();
        //send user to statistics page

    }
}
