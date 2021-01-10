import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from "sweetalert2";
import { ToastrService } from 'ngx-toastr';

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
    public authService: AuthService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    // Swal.fire('Hey user!', 'You are the rockstar!', 'info');
    this.validation();
    if (this.userName == 'admin' && this.password == 'admin') {
      this.toastrService.success('Login Success');
      console.log('login successful');
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      this.toastrService.error('Login Failed');
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
    this.invalidUserName = false
  }

}