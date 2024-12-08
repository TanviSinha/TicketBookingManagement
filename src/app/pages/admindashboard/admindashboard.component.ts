import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule,FormsModule],
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {
 

  constructor(private router: Router) {}


  goToMovieManagement(): void {
      this.router.navigate(['/admindashboard/movie-management']);
    
  }

  goToCinemaManagement(): void {
 
      this.router.navigate(['/admindashboard/cinema-management']);
    } 
    goToFeedbackManagement(): void {
      this.router.navigate(['/admindashboard/feedback-management']);
    }
  logout(): void {
    this.router.navigate(['/admin-login']);
    } 
  }