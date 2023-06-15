import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentYear!: number;
  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    const element = document.getElementById('currentYear');
    if (element) {
      element.innerText = this.currentYear.toString();
    }
  }
}
