import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee;

  constructor(
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('this.active.snapshot.params.id', this.active.snapshot.params.id)
    this.employee = employees[this.active.snapshot.params.id];
  }

}
