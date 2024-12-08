import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Validate user input
    if (!this.username || !this.email || !this.password) {
      alert('All fields are required!');
      return;
    }

    // Retrieve existing users from localStorage
    const storedUsers = localStorage.getItem('registeredUsers');
    const registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];

    // Check if the user already exists
    const userExists = registeredUsers.some((user: any) => user.email === this.email);
    if (userExists) {
      alert('Email already registered!');
      return;
    }

    // Save new user locally in localStorage
    const newUser = { username: this.username, email: this.email, password: this.password };
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Show success message and navigate to login
    alert('User Registered Successfully');
    this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
