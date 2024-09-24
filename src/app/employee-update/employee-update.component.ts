import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { Employee } from '../employee';  

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeId!: number;
  employee: Employee = new Employee('', '', '', '', '');

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      response => {
        this.employee = response;
      },
      error => {
        console.error('Error fetching employee:', error);
      }
    );
  }

  onUpdate() {
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(
      response => {
        console.log('Employee updated successfully:', response);
        this.router.navigate(['/employee-list']); 
      },
      error => {
        console.error('Error updating employee:', error);
        alert('Failed to update employee');
      }
    );
  }
}

