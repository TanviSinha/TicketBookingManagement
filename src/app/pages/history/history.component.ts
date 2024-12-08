import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  userEmail: string | null = null;
  userHistory: any[] = [];

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get the logged-in user's email from AuthService (or other methods)
    this.userEmail = this.authService.getLoggedInUserEmail();
    if (this.userEmail) {
      this.fetchUserHistory(this.userEmail);
    } else {
      console.error('User email not found. Please log in.');
    }
  }

  // Fetch user history from localStorage (simulating backend data)
  fetchUserHistory(email: string): void {
    // Retrieve the booking history from localStorage based on email/user ID
    const storedHistory = localStorage.getItem(`userHistory_${email}`);
    if (storedHistory) {
      this.userHistory = JSON.parse(storedHistory);
    } else {
      console.log('No history found for this user.');
    }
  }
}
