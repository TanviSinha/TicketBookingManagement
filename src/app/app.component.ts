import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HeaderComponent,CommonModule,FooterComponent],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader: boolean = true;
  showFooter: boolean = true;

  searchQuery: string = '';

  @Output() search = new EventEmitter<string>();

  constructor(private router: Router) {
    // Subscribe to router events to toggle header and footer visibility
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hiddenRoutes = ['/login', '/register', '/admin-login'];
        const currentRoute = event.urlAfterRedirects.split('?')[0]; // Exclude query params
        this.showHeader = !hiddenRoutes.includes(currentRoute);
        this.showFooter = !hiddenRoutes.includes(currentRoute);
      }
    });
  }

  // Emit search query to parent component
  onSearchInput() {
    this.search.emit(this.searchQuery.trim());
  }
  
}