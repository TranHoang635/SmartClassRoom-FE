import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Reload the page only once when the component is initialized stardev
    const isPageLoaded = localStorage.getItem('isPageLoaded');
    if (!isPageLoaded) {
      localStorage.setItem('isPageLoaded', 'true');
      location.reload();
    } else {
      localStorage.removeItem('isPageLoaded');
    }
  }

}
