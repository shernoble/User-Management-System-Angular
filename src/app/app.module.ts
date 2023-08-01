import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserFormComponent } from './components/user-form/user-form.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { UserService } from './services/user.service';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { ApiCacheInterceptor } from './services/cacheInterceptor.service';

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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: ApiCacheInterceptor,
  //     multi: true
  // },
  UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
