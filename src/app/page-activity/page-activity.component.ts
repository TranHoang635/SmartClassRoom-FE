import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-page-activity',
  templateUrl: './page-activity.component.html',
  styleUrls: ['./page-activity.component.css']
})
export class PageActivityComponent implements OnInit {

  constructor(    
    private router: Router,
    private service: SharedService) { }

  ngOnInit(): void {
  }
  get NAMEUser(): string {
    return this.service.getLoggedInUser();
  }

}
