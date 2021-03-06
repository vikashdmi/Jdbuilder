import { Component, Inject, OnInit, HostListener,ElementRef} from '@angular/core';
import { AdalService } from './shared/services/adal.service';
import { APP_CONFIG, AppConfig } from './config/config';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { JobServiceService } from './shared/services/job-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jobProject';
  isAuthenticated = false;
  subscription: Subscription;
  isCollapseOn = false;
  selectedIndex = 2
  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log(document.querySelector("#collapsibleNavbar.show"),"sdfdsfdsf");
    setTimeout(()=>{
      if(!document.querySelector("#collapsibleNavbar.show")){
        this.isCollapseOn = false
      }else{
        this.isCollapseOn = true
      }
    },300)
  }
  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    if(this.isCollapseOn){
      event.preventDefault();
    }
  }
  // console.log(element,'element');
  // isCollapseOn = this.element.classList.contains("show");
  constructor(private jobService:JobServiceService, private eRef: ElementRef, private adalService: AdalService, @Inject(APP_CONFIG) private config: AppConfig, private router: Router) {
    router.events.subscribe(val => {
      if (location.pathname.indexOf("myJd") > 0) {
        this.selectedIndex = 2;
      }
      if (location.pathname.indexOf("allJd") > 0) {
        this.selectedIndex = 1;
      }
    });
   }
  ngOnInit() {;
    this.adalService.handleCallback();
    // this.router.navigate(['/']);
    this.subscription = this.adalService.getUserAuthenticationStatus().subscribe(value => {
      if (value) {
        this.isAuthenticated = value;
      } else {
        // clear messages when empty message received
        this.isAuthenticated = value;
      }
    });
    this.adalService.acquireTokenResilient(this.config.resource).subscribe((token) => {
      // console.log(token,'token inside app component')
    });
    // this.jobService.getSideBarIndex().subscribe((sidebarIndex)=>{
    //   this.selectedIndex = sidebarIndex
    // })
  }
  // activateClass(index){
  //   this.jobService.changeSideBarIndex(index)
  // }
}
