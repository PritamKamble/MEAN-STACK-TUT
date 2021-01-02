import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId;
  email;
  firstName;
  lastName;

  constructor(
    private active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeId = this.active.snapshot.params.id - 1;
    this.email = employees[this.employeeId].email;
    this.firstName = employees[this.employeeId].firstName;
    this.lastName = employees[this.employeeId].lastName;
  }

  editEmployee() {
    employees[this.employeeId].email = this.email;
    employees[this.employeeId].firstName = this.firstName;
    employees[this.employeeId].lastName = this.lastName;
    this.router.navigate(['dashboard']);
  }

}
