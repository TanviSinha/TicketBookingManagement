import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  
  selectedSeats: string[] = [];
  totalPrice: number = 0;

  ngOnInit() {
    // Retrieve selected seats and total price from localStorage
    const storedSeats = localStorage.getItem('selectedSeats');
    if (storedSeats) {
      this.selectedSeats = JSON.parse(storedSeats);
      this.totalPrice = this.selectedSeats.length * 300; // Assuming ticket price is 300
    }
  }

  // Method to handle payment process (you can add more logic here)
  proceedToPayment() {
    alert('Payment Successful!');
    localStorage.removeItem('selectedSeats'); // Clear the stored seats after payment
  }
}
