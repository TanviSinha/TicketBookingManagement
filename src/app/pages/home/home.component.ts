import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService, Movie } from '../../services/movie.service'; // Import the MovieService and Movie interface
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies = [
    {
      id: 1,
      title: 'Pushpa: The Rule - Part 2',
      genre: 'Action/Thriller',
      rating: '1.7M',
      votes: '10K',
      image: '../assets/images/movie1.avif',
    },
    {
      id: 2,
      title: 'Bhool Bhulaiyaa 3',
      genre: 'Comedy/Horror',
      rating: '6.2/10',
      votes: '203.5K',
      image: '../assets/images/movie2.avif',
    },
    {
      id: 3,
      title: 'Moana 2',
      genre: 'Adventure/Animation',
      rating: '8.4/10',
      votes: '5.6K',
      image: '../assets/images/movie3.avif',
    },
    {
      id: 4,
      title: 'The Sabarmati Report',
      genre: 'Drama/Historical',
      rating: '8.5/10',
      votes: '32.6K',
      image: '../assets/images/movie4.avif',
    },
    {
      id: 5,
      title: 'Sigham Again',
      genre: 'Action/Drama',
      rating: '6.7/10',
      votes: '170K',
      image: '../assets/images/movie5.avif',
    },
    {
      id: 6,
      title: 'Kanguva',
      genre: 'Action/Fantasy',
      rating: '6.5/10',
      votes: '119.3K',
      image: '../assets/images/movie6.avif',
    },
    {
      id: 7,
      title: 'Solo Leveling',
      genre: 'Action/Anime',
      rating: '8.7/10',
      votes: '39.7K',
      image: '../assets/images/movie7.avif',
    },
    {
      id: 8,
      title: 'Amaran',
      genre: 'Action/Drama',
      rating: '9.4/10',
      votes: '253.5K',
      image: '../assets/images/movie8.avif',
    },
    {
      id: 9,
      title: 'Delhi Bus',
      genre: 'Crime/Drama',
      rating: '4/10',
      votes: 'Early ratings',
      image: '../assets/images/movie9.avif',
    },
    {
      id: 10,
      title: 'Dharamarakshak Mahaveer',
      genre: 'Action/Drama',
      rating: '8.5/10',
      votes: '221K',
      image: '../assets/images/movie10.avif',
    },
  ];

  filteredMovies: Movie[] = []; // Movies filtered by the search query
  searchQuery: string = '';

  // Carousel
  currentSlide = 0;
  totalSlides = 2;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    // Fetch movies from the MovieService
  //  this.movies = this.movieService.getMovies(); if you want to add your on movies
    this.filteredMovies = this.movies; // Initialize with all movies visible
  }

  // Handle the search query event
  onSearch(query: string): void {
    this.searchQuery = query.trim().toLowerCase();

    // Update filteredMovies based on the search query
    this.filteredMovies = this.searchQuery
      ? this.movies.filter((movie) =>
          movie.title.toLowerCase().includes(this.searchQuery)
        )
      : this.movies;
  }

  // Navigate to movie details page
  navigateToCinema(movieId: number): void {
    this.router.navigate(['/cinema', movieId]);
  }

  // Carousel navigation methods
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  // Determine if the carousel should be visible
  isCarouselVisible(): boolean {
    return this.searchQuery === ''; // Only show the carousel if no search query is present
  }
}
