import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Basic validation
    if (!this.username || !this.password) {
      alert('Please fill in both fields.');
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log("response", response);
        if (response.accessToken) {
          localStorage.setItem('authToken', response.accessToken);
          this.router.navigate(['/admin']);
        } else {
          alert('Invalid credentials or login failed');
        }
      },
      error: (error) => {
        console.error('Login error', error);
        alert('An error occurred during login');
      },
    });
  }
}
