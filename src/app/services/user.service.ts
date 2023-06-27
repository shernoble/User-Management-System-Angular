import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='https://gorest.co.in/public/v2/users';


  constructor(private http:HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  addUser() : void{

  }
}
