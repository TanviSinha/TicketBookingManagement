// import { Routes } from '@angular/router';


// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];
// import { Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';
// import { HomeComponent } from './pages/home/home.component';
// import { HistoryComponent } from './pages/history/history.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'history', component: HistoryComponent },
// ];
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { AdminLoginComponent } from './pages/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { SeatBookingComponent } from './pages/seat-booking/seat-booking.component';
import { MovieManagementComponent } from './pages/admindashboard/movie-management/movie-management.component';
import { CinemaManagementComponent } from './pages/admindashboard/cinema-management/cinema-management.component';
import { UserFeedbackComponent } from './pages/user-feedback/user-feedback.component';
import { FeedbackManagementComponent } from './pages/admindashboard/feedback-management/feedback-management.component';
import { PaymentComponent } from './pages/payment/payment.component';
// import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Adjust the path as per your folder structure

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'feedback', component: UserFeedbackComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    canActivate: [AuthGuard], // Protects the whole admin dashboard
    children: [
      { path: 'movie-management', component: MovieManagementComponent, canActivate: [AuthGuard] }, // Only accessible by authenticated users
      { path: 'cinema-management', component: CinemaManagementComponent, canActivate: [AuthGuard] }, // Only accessible by authenticated users
      { path: 'feedback-management', component: FeedbackManagementComponent, canActivate: [AuthGuard] }, // Only accessible by authenticated users
    ]
  },
  { path: 'cinema/:movieId', component: CinemaComponent },
  {
    path: 'seat-booking',
    component: SeatBookingComponent,
    // canActivate: [AuthGuard], // Protects the seat-booking route
  },
  { path: 'payment', component: PaymentComponent },
];
