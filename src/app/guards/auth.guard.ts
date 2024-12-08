import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Path to your AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdminLoggedIn()) {
      return true;
    } else {
      // Redirect to login if the admin is not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}
