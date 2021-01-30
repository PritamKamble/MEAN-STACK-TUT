import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employees } from '../employee';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  email;
  firstName;
  lastName;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addNewEmployee() {
    
    const newEmployee = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName
    }


    employees.push(newEmployee);

    this.router.navigate(['dashboard'])

  }

}
