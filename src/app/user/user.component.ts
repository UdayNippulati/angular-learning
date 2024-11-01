import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // 1 way of doing.
  //selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  // onSelectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }
  //2nd way of doing
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // });
  // onSelectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {}
}
