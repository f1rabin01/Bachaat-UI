import { Injectable, ErrorHandler  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User} from './user.model';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
    //  'Content-Type': 'application/json',
    // 'Accept': 'application/json'
  })
};

const httpPostOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {
  private userUrl = 'http://10.13.200.57:8080/api/v1/user';
  constructor( private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(users => console.log(users)),
      );
  }
  addUser(): Observable<User> {
    const newUser = JSON.stringify({
      firstName: 'f1ssoft',
      middleName: 'kumar',
      lastName: 'user',
      emailAddress: 'user@user.com',
      address: 'user',
      password: 'user',
      mobileNumber: '9876543210'
    });
    return this.http.post<User>(this.userUrl, newUser, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://10.13.200.55:8080' })
    }).pipe(
      tap(_ => this.log(`updated user=${newUser}`)),
      catchError(this.handleError<User>('User added'))
    );
  }
  editUser(user: object): Observable<User> {
    const deleteUrl = this.userUrl + '/edit?id=' + user;
    // console.log(deleteUrl);
    return;
  }
  // deleteUser(user: User): Observable<{}> {
  //   const id = typeof user === 'number' ? user : user.id;
  //   const url = `${this.userUrl}/delete?id=${id}`;
  //   console.log(url);
  //   return this.http.post(url, '').pipe();
  // }

  deleteUserParam(user: User): Observable<{}> {
    const id = typeof user === 'number' ? user : user.id;
    // const deleteUrl = this.userUrl + '/delete?id=' + id;
    const params = new HttpParams();
    params.set('id', id.toString());
    const url = `${this.userUrl}/delete` + {params: params};
    console.log(params);
    console.log(url);
    return this.http.post(url, '').pipe();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('================' +  message);
  }

}
