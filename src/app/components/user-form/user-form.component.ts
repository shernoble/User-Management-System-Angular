import { Component} from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  nameControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]);
  emailControl : FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]);


  users : User[]=[];

  name:string;
  email:string;
  gender:string = 'male';
  status:boolean = false;

  constructor(private userService : UserService){}

  onSubmit(){
    // do basic validation here -client side?
    // name validate: only alphabets n space
    //email: valid email and not in unique
    

    if(!this.name) {
      alert("please enter your name");
      return;
    }
    if(!this.email){
      alert("please enter your email");
      return ;
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
