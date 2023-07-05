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

    // Check if the page has been loaded before
    const isPageLoaded = localStorage.getItem('isPageLoaded');
    // Reload the page only once when the component is initialized
    if (!isPageLoaded) {
      localStorage.setItem('isPageLoaded', 'true');
      // tăng độ trễ tải lại trang 2 giây
      setTimeout(() => {
        location.reload();
      });
    } else {
      localStorage.removeItem('isPageLoaded');
    }
    // Ẩn div loading sau 2 giây
    setTimeout(() => {
      const loadingDiv: HTMLDivElement | null = document.getElementById('loading') as HTMLDivElement | null;
      if (loadingDiv) {
        loadingDiv.style.display = 'none';
      }
    }, 1500);
  }
}
