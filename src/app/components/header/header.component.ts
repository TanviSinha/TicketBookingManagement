import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router,private searchService: SearchService) {}

  navigateToHistory() {
    this.router.navigate(['/history']);
  }
  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
reloadHome() {
  // Navigate to home and reload
  this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/home']);
  });
}
@Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchQuery: string = '';

  onSearchInput(): void {
    // Emit the search query whenever the user types something
    this.search.emit(this.searchQuery);
  }
  navigateToFeedback() {
    this.router.navigate(['/feedback']);
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}