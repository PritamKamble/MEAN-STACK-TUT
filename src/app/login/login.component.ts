import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;

  invalidUserName = false;
  invalidPassword = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.validation();
    if (this.userName == 'admin' && this.password == 'admin') {
      console.log('login successful');
      this.authService.login();
      this.router.navigate(['/dashboard']);
    }
  }

  validation() {
    if (this.userName != 'admin') {
      this.invalidUserName = true;
    }

    if (this.password != 'admin') {
      this.invalidPassword = true;
    }
  }


  test(event: Event) {
    event.preventDefault();
    this.invalidUserName=false
  }

}