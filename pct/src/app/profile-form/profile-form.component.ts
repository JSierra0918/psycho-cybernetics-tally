import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

  profileTitle: string;

  constructor(private storage: StorageService) { }

  ngOnInit() {}

  addItem(){
    
  }

  updateItem(){

  }

  deleteItem(){

  }
}
