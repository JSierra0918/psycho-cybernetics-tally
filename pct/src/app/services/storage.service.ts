import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Users } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  profileKey = "profile";

  constructor(private storage: Storage) {}

  async addItem(item: Users): Promise<any> {
    const getItems = await this.storage.get(this.profileKey);
    let newItems:Users[] = [];

    if (getItems) {
      newItems.push(getItems);
      newItems.push(item);
      return this.storage.set(this.profileKey, newItems);
    } else {
      return this.storage.set(this.profileKey, [item]);
    }
  }

  async getItem(item: Users): Promise<Users[]> {
    const getItems = await this.storage.get(this.profileKey);
    return getItems;
  }

  async updateItem(item: Users, title:string ):Promise<any> {
    const getItems = await this.storage.get(this.profileKey);
    let newItems:Users[] = [];

    if (!getItems || getItems.length === 0) {
      return null;
    } 
    
  }

  async deleteItem(id: number):Promise<Users> {
    const getItems = await this.storage.get(this.profileKey);
    if (!getItems || getItems.length === 0) {
      return null;
    }
    let newItems:Users[] = [];

    const filteredItem = getItems.filter( id !== getItems.id);
    newItems.push(filteredItem);

    this.storage.set(this.profileKey, newItems);
  }
}
