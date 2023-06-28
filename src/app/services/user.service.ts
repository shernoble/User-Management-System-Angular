import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='https://gorest.co.in/public/v2/users';

  constructor(private http:HttpClient) { }

  getUsers() : Observable<User[]>{
    const headers={'Authorization':'Bearer 077e7fb9c550c5b6d718c4ef76112ac04b6bb25960ab27a563b30f714b70fe09'};
    return this.http.get<User[]>(this.apiUrl,{'headers':headers});
  }
  addUser(user : User) : Observable<User>{
    const headers={'Authorization':'Bearer 077e7fb9c550c5b6d718c4ef76112ac04b6bb25960ab27a563b30f714b70fe09'};
    return this.http.post<User>(this.apiUrl,user,{'headers':headers});
  }
}
