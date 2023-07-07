import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentYear!: number;

  constructor(
    private router: Router,
    private service: SharedService) { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    const element = document.getElementById('currentYear');
    if (element) {
      element.innerText = this.currentYear.toString();
    }

    // loading trang
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
    // Ẩn div loading sau 1.5 giây
    setTimeout(() => {
      const loadingDiv: HTMLDivElement | null = document.getElementById('loading') as HTMLDivElement | null;
      if (loadingDiv) {
        loadingDiv.style.display = 'none';
      }
    }, 1500);
  }

  get NAMEUser(): string {
    return this.service.getLoggedInUser();
  }

  logout(): void {
    this.service.logout();
    this.router.navigateByUrl("/login");
  }
}
