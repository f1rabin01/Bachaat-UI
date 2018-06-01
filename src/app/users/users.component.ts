import {Component, OnInit} from '@angular/core';
import {UserService} from './shared/user.service';

import {User} from './shared/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestOptions} from "@angular/http"

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
    const data = {
      "firstName": "f1soft",
      "middleName": "kumar",
      "lastName": "user",
      "emailAddress": "user@user.com",
      "address": "user",
      "mobileNumber": "2342347322",
      "password": "user",
      "activationCode": 526142,
      "roles": []
    };
    const body = JSON.stringify(data);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    //headers.append('Content-Type', 'application/json');

    const options = new RequestOptions();

    // this.http.post<User>('/helloUrl/bachaat/api/v1/user', body , {headers : httpHeaders}
    this.http.post<User>('http://10.13.200.57:8080/api/v1/user', body , {headers : httpHeaders}
      ).subscribe(res => {
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
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    console.log(value);
    let body: User = value;
    this.http.post<User>('http://10.13.200.57:8080/bachaat/api/v1/user', value, {headers: httpHeaders}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('error occurred');
      }
    );
  }
}
