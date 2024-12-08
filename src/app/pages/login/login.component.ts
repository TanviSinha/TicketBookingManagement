import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent {
  // credentials = { email: '', password: '', role: 'user' };

  // constructor(private authService: AuthService, private router: Router) {}

  // onLogin() {
  //   this.authService.login(this.credentials).subscribe({
  //     next: (response) => {
  //       if (this.credentials.role === 'admin') {
  //         this.router.navigate(['/admin-dashboard']);
  //       } else {
  //         this.router.navigate(['/user-dashboard']);
  //       }
  //     },
  //     error: (err) => console.error('Login failed:', err),
  //   });
  // }
// export class LoginComponent {
//   email = '';
//   password = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onLogin() {
//     this.authService.login(this.email, this.password).subscribe({
//       next: (response: any) => {
//         localStorage.setItem('token', response.token);
//         alert('Login successful');
//         this.router.navigate(['/home']);
//       },
//       error: () => alert('Invalid credentials'),
//     });
//   }
//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }
//   goToAdminLogin() {
//     this.router.navigate(['/admin-login']);
//   }
// }
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Retrieve registered users from localStorage
    const storedUsers = localStorage.getItem('registeredUsers');
    const registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];

    // Find a matching user
    const user = registeredUsers.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (user) {
      // Simulate setting a login token and user email in localStorage
      localStorage.setItem('token', 'dummy-jwt-token'); // Simulate a token
      localStorage.setItem('userEmail', this.email);

      alert('Login successful');
      this.router.navigate(['/home']); // Navigate to the home page
    } else {
      alert('Invalid email or password');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Navigate to the register page
  }

  goToAdminLogin() {
    this.router.navigate(['/admin-login']); // Navigate to the admin login page
  }
}
