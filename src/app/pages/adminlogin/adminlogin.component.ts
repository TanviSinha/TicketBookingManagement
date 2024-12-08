import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials = {
      adminEmail: this.email,
      adminPassword: this.password
    };

    this.authService.loginAdmin(credentials).subscribe(
      (response) => {
        if (response === 'Admin Login Successful') {
          // Save a flag to indicate the admin is logged in
          localStorage.setItem('adminLoggedIn', 'true');
          this.router.navigate(['/admindashboard']); // Redirect to the movie management page
        } else {
          this.errorMessage = 'Invalid credentials!';
        }
      },
      (error) => {
        this.errorMessage = 'Login failed. Please try again!';
      }
    );
  }
}