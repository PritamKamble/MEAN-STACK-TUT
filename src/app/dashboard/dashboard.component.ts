import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { employees } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoading = false;
  employees = [];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.logout();
    }
    this.getData();
  }

  getData() {
    this.isLoading = true;

    setTimeout(() => {
      this.employees = employees;
      this.isLoading = false;
    }, 1000);

  }

  logout() {
    // this.showConfirmBox();
    this.authService.logout();
    this.router.navigate(['/']);
  }

  showConfirmBox() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will logged out of the system!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.logout();
      }
    })
  }

  deleteEmployee(index) {
    employees.splice(index, 1);
  }

}
