// src/app/add-employee/add-employee.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent {
  username = '';
  fullname = '';
  email = '';
  password = '';
  role = '';

  constructor(private employeeService: EmployeeService) {}

  
  onSubmit() {
    const newEmployee = new Employee(this.username, this.fullname, this.email, this.password, this.role);
    this.employeeService.createEmployee(newEmployee).subscribe(
      response => {
        console.log('Employee added successfully:', response);
        this.clearForm();
      },
      error => {
        console.error('Error adding employee:', error);
        alert('Failed to add employee');
      }
    );
  }

  clearForm() {
    this.username = '';
    this.fullname = '';
    this.email = '';
    this.password = '';
    this.role = '';
  }
}




