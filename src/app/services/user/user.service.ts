import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user.model';

@Injectable()
export class UserService {
  user: User;
  private userUrl = 'http://10.13.200.55:8080/bachaat/api/v1/users';
  constructor(
    private http: HttpClient,
  ) { }

  addUser(newUser, header): Observable<any> {
    const httpHeader = { headers: new HttpHeaders(header) };
    return this.http.post(this.userUrl, newUser, httpHeader);
  }
}
