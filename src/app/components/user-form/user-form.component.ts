import { Component ,Output,EventEmitter} from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  users : User[]=[];

  name:string;
  email:string;
  gender:string = 'male';
  status:boolean = false;

  constructor(private userService : UserService){}

  onSubmit(){
    // do basic validation here -client side?

    if(!this.name) {
      alert("please enter your name");
      return;
    }

    const newUser={
      name : this.name,
      email: this.email,
      gender : this.gender,
      status: this.status? "active":"inactive"
    }

    this.userService.addUser(newUser).subscribe((newUser) => {
      this.users.push(newUser);
    })
    

    this.name='';
    this.email='';
    this.gender='male';
    this.status=false;




  }

}
