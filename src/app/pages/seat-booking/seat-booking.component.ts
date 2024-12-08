import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-seat-booking',
  standalone:true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss']
})
export class SeatBookingComponent implements OnInit {
  constructor(private router: Router) {}
  ticketPrice: number = 200; // Example price per ticket
  selectedSeats: string[] = [];
  bookedSeats: string[] = ['A1', 'B2', 'C3']; // Example booked seats (can be fetched from a backend)
  totalPrice: number = 0;
  seatLayout: string[] = ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4', 'C5']; // Example seat layout

  ngOnInit() {
    this.loadSelectedSeats();
  }

  toggleSeatSelection(seat: string) {
    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
    this.calculateTotalPrice();
    this.saveSelectedSeats();
  }

  calculateTotalPrice() {
    this.totalPrice = this.selectedSeats.length * this.ticketPrice;
  }

  // Save selected seats to localStorage
  saveSelectedSeats() {
    localStorage.setItem('selectedSeats', JSON.stringify(this.selectedSeats));
  }

  // Load selected seats from localStorage
  loadSelectedSeats() {
    const storedSeats = localStorage.getItem('selectedSeats');
    if (storedSeats) {
      this.selectedSeats = JSON.parse(storedSeats);
      this.calculateTotalPrice();
    }
  }
  
  // Confirm booking (example method)
  confirmBooking() {
    if (this.selectedSeats.length > 0) {
      localStorage.setItem('selectedSeats', JSON.stringify(this.selectedSeats)); // Store selected seats in localStorage
      this.router.navigate(['/payment']); // Navigate to Payment page
    } else {
      alert("Please select at least one seat.");
    }
}
}
