import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  // Function to handle login
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Logout function to clear the token
  logout() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
