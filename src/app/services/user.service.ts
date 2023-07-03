import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../User';
import { BEARER_TOKEN } from '../config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='https://gorest.co.in/public/v2/users';

  constructor(private http:HttpClient) { }

  getUsers() : Observable<User[]>{
    const headers={'Authorization':BEARER_TOKEN};
    return this.http.get<User[]>(this.apiUrl,{'headers':headers});
  }
  addUser(user : User) : Observable<User>{
    const headers={'Authorization':BEARER_TOKEN};
    return this.http.post<User>(this.apiUrl,user,{'headers':headers});
  }
}
