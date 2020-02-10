import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../../services/job-service.service';
@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private jobService: JobServiceService) { }
  selectedIndex = 2
  ngOnInit() {
    this.jobService.getSideBarIndex().subscribe((sidebarIndex)=>{
      this.selectedIndex = sidebarIndex
    })
  }
  activateClass(index){
    this.jobService.changeSideBarIndex(index)
  }

}
