import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: SharedService
  ) { }

  ngOnInit(): void {
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



  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    console.log("username: ", username);
    console.log("password: ", password);

    this.authService.login(username, password).subscribe(
      response => {
        console.log("login success: ", response);
      },
      error => {
        console.log("login error: ", error);
      }
    );
  }
}
