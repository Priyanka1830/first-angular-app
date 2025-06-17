import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
