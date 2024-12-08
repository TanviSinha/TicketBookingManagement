import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback.service';
import { CommonModule } from '@angular/common';

interface Feedback {
  user: string;
  rating: number;
  comments: string;
}

@Component({
  selector: 'app-feedback-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-management.component.html',
  styleUrl: './feedback-management.component.scss'
})
export class FeedbackManagementComponent implements OnInit {
  feedbackList: any[] = [];
  loading: boolean = true;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    // Load feedbacks from localStorage on initialization
    this.feedbackList = this.feedbackService.getFeedbacks();
    this.loading = false;
  }

  // Example: Add feedback
  addFeedback(feedback: any): void {
    this.feedbackService.addFeedback(feedback);
    this.feedbackList = this.feedbackService.getFeedbacks();  // Refresh the feedback list
  }

  // Example: Delete feedback
  deleteFeedback(feedbackId: number): void {
    this.feedbackService.deleteFeedback(feedbackId);
    this.feedbackList = this.feedbackService.getFeedbacks();  // Refresh the feedback list
  }

  // Example: Update feedback
  updateFeedback(updatedFeedback: any): void {
    this.feedbackService.updateFeedback(updatedFeedback);
    this.feedbackList = this.feedbackService.getFeedbacks();  // Refresh the feedback list
  }
 }  
// feedbackList: Feedback[] = [
//   { user: 'John Doe', rating: 5, comments: 'Great experience! The cinema was amazing.' },
//   { user: 'Jane Smith', rating: 4, comments: 'Good experience, but could improve food quality.' },
//   { user: 'Bob Johnson', rating: 3, comments: 'Average experience, the movie timings were off.' }
// ]