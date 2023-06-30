import { Component,OnDestroy,OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Subject, switchMap, takeUntil } from 'rxjs';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit  {

  formData: FormGroup;

  private unsubscribe = new Subject<void>()


  constructor(private userService : UserService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', Validators.required],
      status: [false]
    });

    

  }
//   ngOnDestroy() {
//     this.unsubscribe.next()
// }

  submitForm() {
    if (this.formData.valid) {
      // Handle form submission logic here
      this.formData.value.status=this.formData.value.status?"active":"inactive";
      let newUser=this.formData.value;
      try{
        this.userService.addUser(newUser).subscribe();

      }
      catch(error){
        console.log(error);
        
      }
      // console.log(this.formData.value);
    } 
    else {
      // Form is invalid, display error messages or take appropriate action
      alert("Error : invalid data");
    }

    this.formData.reset();

  }

}
