import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private storageKey = 'feedbacks';  // Key used to store feedbacks in localStorage

  constructor() {}

  // Method to get all feedbacks from localStorage
  getFeedbacks(): any[] {
    const feedbacks = localStorage.getItem(this.storageKey);
    return feedbacks ? JSON.parse(feedbacks) : [];  // Parse the JSON string to an array
  }

  // Method to get a specific feedback by ID from localStorage
  getFeedbackById(feedbackId: number): any {
    const feedbacks = this.getFeedbacks();
    return feedbacks.find(feedback => feedback.id === feedbackId);  // Find the feedback by ID
  }

  // Method to add a new feedback to localStorage
  addFeedback(feedback: any): void {
    const feedbacks = this.getFeedbacks();
    feedback.id = feedbacks.length + 1;  // Assign a new ID based on length (or any other logic)
    feedbacks.push(feedback);  // Add new feedback to the list
    localStorage.setItem(this.storageKey, JSON.stringify(feedbacks));  // Save to localStorage
  }

  // Method to update feedback in localStorage
  updateFeedback(updatedFeedback: any): void {
    const feedbacks = this.getFeedbacks();
    const index = feedbacks.findIndex(feedback => feedback.id === updatedFeedback.id);
    if (index !== -1) {
      feedbacks[index] = updatedFeedback;  // Update the feedback
      localStorage.setItem(this.storageKey, JSON.stringify(feedbacks));  // Save updated list to localStorage
    }
  }

  // Method to delete feedback from localStorage
  deleteFeedback(feedbackId: number): void {
    let feedbacks = this.getFeedbacks();
    feedbacks = feedbacks.filter(feedback => feedback.id !== feedbackId);  // Remove feedback by ID
    localStorage.setItem(this.storageKey, JSON.stringify(feedbacks));  // Save updated list to localStorage
  }
}
