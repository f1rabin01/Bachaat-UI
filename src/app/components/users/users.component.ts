import { Component, OnInit } from '@angular/core';

import {User} from '../../models/user/user.model';
import {UserService} from '../../services/user/user.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
