import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  imports: [RouterModule], 
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle logout
  confirmLogout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}
