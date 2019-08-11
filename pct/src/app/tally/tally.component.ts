import { Component, OnInit } from "@angular/core";
import { getLocaleDateTimeFormat } from '@angular/common';

//decorator
@Component({
    selector: 'app-tally',
    templateUrl: 'tally.html',
    styleUrls: ['tally.scss'],
  })

  export class Tally implements OnInit {
    title: string;
    count: number;
    userData: any[];
    id: number;
    //date created
    dateTime: Date = new Date();
    dateCreated: string

    constructor() {}

    ngOnInit() {
        this.title = "This is the Tally title";
        this.count = 3;
        this.id = this.id + 1;
        this.userData = [
            {
                id: this.id,
                title: this.title,
                count: this.count,
                created: `${this.dateTime.getUTCMonth() +1}/${this.dateTime.getDay}/${this.dateTime.getUTCFullYear()}`
            }

        ]
    }
  }