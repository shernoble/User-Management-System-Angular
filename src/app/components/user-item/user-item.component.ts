import { Component,Input } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'tr[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  
  @Input() user : User;

}
