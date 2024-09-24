// src/app/employee-list/employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeUpdateComponent], 
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee!: Employee | undefined;

  constructor(private employeeService: EmployeeService) {}
  
  ngOnInit() {
    this.loadEmployees();
  }

  //function to load all employees
  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response; 
      },
      error => {
        console.error('Error fetching employees:', error);
        alert('Failed to load employees');
      }
    );
  }

 // Function to set the employee to be updated
 setEmployeeForUpdate(employees: Employee) {
  this.selectedEmployee = { ...employees }; 
}

// Function to delete an employee
deleteEmployee(employeeId: number) {
  if (confirm('Are you sure you want to delete this employee?')) {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        console.log('Employee deleted successfully');
        this.loadEmployees(); 
      },
      error => {
        console.error('Error deleting employee:', error);
        alert('Failed to delete employee');
      }
    );
  }
}

// Function to close the modal after update
closeModal() {
  this.selectedEmployee = null!;
}

}
