import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError,catchError} from 'rxjs';
import { User } from '../User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='https://gorest.co.in/public/v2/users';

  constructor(private http:HttpClient) { }

  getUsers() : Observable<User[]>{
    const headers={'Authorization':environment.bearer_token};
    return this.http.get<User[]>(this.apiUrl,{'headers':headers})
      .pipe(
        catchError((error:HttpErrorResponse) => {
          console.error("an error occured",error.message);
          alert("an error occured : "+error.message);
          return throwError('Something went wrong; please try again later.');
        })
      )
      
  }
  addUser(user : User) : Observable<User>{
    const headers={'Authorization':environment.bearer_token};
    return this.http.post<User>(this.apiUrl,user,{'headers':headers})
    .pipe(
      catchError((error:HttpErrorResponse) => {
        console.error("an error occured",error.message);
        alert("an error occured : "+error.message);
        return throwError('Something went wrong; please try again later.');
      })
    )
  }
}
