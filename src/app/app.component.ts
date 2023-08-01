import { Component,HostListener,OnInit} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'User-Mngmt-Syst';

  constructor(private swupdate:SwUpdate){
    // checks if update available
    this.swupdate.available.subscribe((event: any) => {
      // reload / refresh the browser
      this.swupdate.activateUpdate().then(() => document.location.reload());
    });
  }

  // showModal:boolean=false;
  // isOnline:boolean=navigator.onLine;
  
  // @HostListener('window:online',['$event'])
  // onOnline(event:Event){
  //   this.showModal=false;
  //   this.isOnline=true;
  // }

  // @HostListener('window:offline',['$event'])
  // onOffline(event:Event){
  //   this.showModal=true;
  //   this.isOnline=false;
  // }

  ngOnInit(): void {
      // this.isOnline=navigator.onLine;
      // if(! this.isOnline){
      //   this.showModal=true;
      // }
  }

}

