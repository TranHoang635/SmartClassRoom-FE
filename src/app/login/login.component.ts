import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: ['admin'],
    password: ['admin']
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: SharedService) {
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
