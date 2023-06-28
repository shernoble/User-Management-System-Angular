import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const appRoutes : Routes =[
  {path:'',component:UsersListComponent},
  {path:'new-user',component:UserFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ButtonComponent,
    HeaderComponent,
    UserItemComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
