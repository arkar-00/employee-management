import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [RouterModule, CommonModule], // Include CommonModule here
})
export class AdminComponent {
  isSidebarOpen = true; // State variable to manage sidebar visibility

  constructor(private authService: AuthService, private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle sidebar visibility
  }

  confirmLogout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}