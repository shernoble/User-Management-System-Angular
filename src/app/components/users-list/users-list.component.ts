import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users : User[] =[];
  // to use service, add it to constructor

  constructor(private userService : UserService){}

  ngOnInit() : void{
    this.userService.getUsers().subscribe((users) => {
      this.users=users;
    });
  }

  nextPage(){
    
  }

}
