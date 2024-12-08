import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}
    private loggedInUserEmail: string | null = null;

    setLoggedInUserEmail(email: string): void {
      this.loggedInUserEmail = email;
    }
  
    // Get the logged-in user's email
    getLoggedInUserEmail(): string | null {
      return this.loggedInUserEmail || localStorage.getItem('userEmail');
    }
    loginAdmin(credentials: { adminEmail: string, adminPassword: string }): Observable<string> {
      // Simulate the backend response
      if (credentials.adminEmail === 'admin@gmail.com' && credentials.adminPassword === 'adminpassword') {
        return of('Admin Login Successful');
      } else {
        return of('Invalid credentials');
      }
    }
  
    // Check if the admin is logged in
    isAdminLoggedIn(): boolean {
      return localStorage.getItem('adminLoggedIn') === 'true';
    }
  }

