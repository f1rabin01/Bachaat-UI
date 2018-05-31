import {Component, OnInit} from '@angular/core';
import {UserService} from './shared/user.service';

import {User} from './shared/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data: object;
  users: User[];

  constructor(private userService: UserService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getUsers();
  }

  addUser(): void {
    // this.userService.addUser()
    // .subscribe(onSuccess => {console.log(onSuccess)}, onError => {console.log(onError)});
    // console.log(this.users);

    this.http.post<User>('http://10.13.200.55:8080/bachaat/api/v1/user',
      {
        firstName: 'f1ssoft',
        middleName: 'kumar',
        lastName: 'user',
        emailAddress: 'user@user.com',
        address: 'user',
        password: 'user',
        mobileNumber: '9876543210'
      }, {
        headers: new HttpHeaders({'Access-Control-Allow-Origin': 'http://10.13.200.55:8080'})
      }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('error occurred');
      }
    );

  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  edit(user: object): void {
    alert('edit' + user);
    this.userService.editUser(user)
      .subscribe();
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user)
      .subscribe( users => this.users);
  }

  onSubmit(value): void{
    console.log(value);
    this.http.post<User>('http://10.13.200.55:8080/bachaat/api/v1/user', value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('error occurred');
      }
    );
  }
}
