import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from "@angular/common/http";
import { employees } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = [];
  employee = employees;

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.logout();
    }
    this.getData();
  }

  getData() {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((res: any) => {
      console.log('res', res.data);
      this.users = res.data;
    }, (err: any) => {
      console.log('err', err)
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
