import { Component,OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Subject, Subscription,interval,switchMap,take,filter, takeUntil } from 'rxjs';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  formData: FormGroup;
  autoSaveSubscription: Subscription;
  unsubscribe: Subject<void>=new Subject<void>();

  constructor(private userService : UserService,private formBuilder: FormBuilder){

    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', Validators.required],
      status: [false]
    });

  }

  ngOnInit(): void {

    const draft=localStorage.getItem("formDraft");

    if(draft){
      this.formData.setValue(JSON.parse(draft));
    }
    // else{
      // this.formData = this.formBuilder.group({
      //   name: ['', Validators.required],
      //   email: ['', [Validators.required, Validators.email]],
      //   gender: ['male', Validators.required],
      //   status: [false]
      // });
    // }

    this.formData.valueChanges.pipe(
      filter(() => this.formData.valid)
    )
    .subscribe((val) => localStorage.setItem("formDraft",JSON.stringify(val)));

  }


  submitForm() {
    if (this.formData.valid) {
      // Handle form submission logic here
      this.formData.value.status=this.formData.value.status?"active":"inactive";
      let newUser=this.formData.value;
      try{
        this.userService.addUser(newUser).subscribe();
        localStorage.removeItem("formDraft");
        // tap into error field-not happening
        // insgtead send a get request and check if 

      }
      catch(error){
        alert("error");
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
