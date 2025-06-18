import { Component, EventEmitter, Input , Output  } from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

interface Users{
  id: string;
  name: string;
  avatar: string;

}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class User {
  @Input({required: true}) user!: Users ;

  @Output() select =  new EventEmitter<string>();
  

   get imagePath() {
     return 'assets/users/' + this.user.avatar;
   }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
