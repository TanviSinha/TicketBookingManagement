import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.scss'
})
export class UserFeedbackComponent {
  feedback = {
    customerName: '',
    email: '',
    message: '',
    rating: 5
  };
  feedbackSubmitted: boolean = false;

  constructor() {}

  // Function to handle feedback submission and store it in localStorage
  submitFeedback() {
    // Retrieve any previously stored feedback
    const storedFeedback = JSON.parse(localStorage.getItem('userFeedbacks') || '[]');

    // Add new feedback to the stored feedback array
    storedFeedback.push(this.feedback);

    // Store updated feedback array back to localStorage
    localStorage.setItem('userFeedbacks', JSON.stringify(storedFeedback));

    console.log('Feedback submitted:', this.feedback);
    this.feedbackSubmitted = true;

    // Clear the form after submission
    this.feedback = { customerName: '', email: '', message: '', rating: 5 };
  }
}