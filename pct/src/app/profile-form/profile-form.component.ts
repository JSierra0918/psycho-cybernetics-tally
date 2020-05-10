import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { User } from "../model/user";

@Component({
  selector: "app-profile-form",
  templateUrl: "./profile-form.component.html",
  styleUrls: ["./profile-form.component.scss"],
})
export class ProfileFormComponent implements OnInit {
  profileTitle: string;
  profileKey = "profile";
  static staticIdNumber: number = 0;

  constructor(private storage: StorageService) {}

  ngOnInit() {}

  async addItem() {
    const user:User = {
      id: this.handleIDCounterStatic(),
      title: this.profileTitle,
      count: 0,
      created: this.getDate()
    };
    const addUser = await this.storage.addItem(this.profileKey, user);
    console.log('addUser:', addUser)
  }

  updateItem() {}

  deleteItem() {}

  handleIDCounterStatic(): number {
    const id = ProfileFormComponent.staticIdNumber++;
    return id;
  }

  getDate(): string {
    const d: Date = new Date();
    const month = d.getMonth();
    const day = d.getDay();
    const year = d.getFullYear();
    const created: string = `${month}/${day}/${year}`;
    return created
  }

  handleSubmit(e:Event) {
    e.preventDefault();
    this.addItem();
  }
}
