import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class StorageService {

  constructor(private storage: Storage) {}
  
  async getItem(key:string): Promise<User[]> {
    const getItems = await this.storage.get(key);
    return getItems;
  }

  async addItem(key:string, item: User): Promise<any> {
    const getItems = await this.storage.get(key);
    console.log(typeof getItems);
    let newItems:User[] = [];

    if (getItems) {
      newItems = [...getItems, item];
      return this.storage.set(key, newItems);
    } else {
      return this.storage.set(key, [item]);
    }
  }

  async updateItem(key:string, item: User, title:string ):Promise<any> {
    const getItems = await this.storage.get(key);
    let newItems:User[] = [];

    if (!getItems || getItems.length === 0) {
      return null;
    }

    newItems.push(getItems);
    const findItem = newItems.filter(value => value.id === item.id);
    const newTitle = [...findItem, title];
    newItems = [...getItems, newTitle];
    return newItems;
  }

  async deleteItem(key:string, id: number):Promise<User> {
    const getItems = await this.storage.get(key);
    if (!getItems || getItems.length === 0) {
      return null;
    }
    let newItems:User[] = [];

    const filteredItem = getItems.filter( value => value.id !== id);
    newItems.push(filteredItem);

    this.storage.set(key, newItems);
  }
}