import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/auth/admin';

  constructor(private http: HttpClient, private authService: AuthService) {}
 
  // Create Employee 
 createEmployee(employee : Employee):Observable<Employee>{
   return this.http.post<Employee>(`${this.apiUrl}/create-employee`, employee, {
    headers: this.getHeaders()
  });
 }

 //Update Employee
 updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`${this.apiUrl}/update/${employeeId}`, employee, {
    headers: this.getHeaders()
  });
}

// Get Employee By ID
getEmployeeById(employeeId: number): Observable<Employee> {
  return this.http.get<Employee>(`${this.apiUrl}/profile/${employeeId}`, {
    headers: this.getHeaders()
  });
}

//Get AllByEmployees
getAllEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.apiUrl}/employees`, {
    headers: this.getHeaders()
  });
}

//Delete Employee By ID
deleteEmployee(employeeId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/delete-employee/${employeeId}`, {
    headers: this.getHeaders()
  });
}
 
 // Get the headers including the JWT token
 private getHeaders(): HttpHeaders {
  const token = this.authService.getToken();
  return new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });
}
}
