// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSuccess: boolean = false;
  loginMessage: string = '';
  showAlert: boolean = false;
  rememberAccount: boolean = false; // Biến lưu trạng thái nhớ tài khoản

  constructor(
    private formBuilder: FormBuilder,
    private authService: SharedService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      remember: ['']
    });
  }

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

  onRememberAccountChange() {
    // Cập nhật giá trị biến rememberAccount
    this.rememberAccount = !this.rememberAccount;
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
  
    this.authService.login(username, password).subscribe(
      response => {
        this.loginSuccess = true;
        this.loginMessage = 'Đăng nhập thành công ✅';
        this.showAlert = true;
        console.log("login success: ", response);
        setTimeout(() => {
          this.loginSuccess = false;
          this.loginMessage = '';
          this.showAlert = false;
        }, 1500);
  
        if (this.rememberAccount) {
          // Lưu thông tin tài khoản vào localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Xóa thông tin tài khoản từ localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }
      },
      error => {
        this.loginSuccess = false;
        this.loginMessage = 'Sai tài khoản hoặc mật khẩu ❌';
        this.showAlert = true;
        console.log("login error: ", error);
        setTimeout(() => {
          this.loginSuccess = false;
          this.loginMessage = '';
          this.showAlert = false;
        }, 1500);
      }
    );
  }
   
}
