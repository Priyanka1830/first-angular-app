import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User , Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId? : string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string ) {
    this.selectedUserId = id;
  }
}


