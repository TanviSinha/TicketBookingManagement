import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Movie {
  id: string;
  name: string;
  genre: string;
  ratings: string;
  votes: string;
  image: string;
}

@Component({
  selector: 'app-movie-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './movie-management.component.html',
  styleUrls: ['./movie-management.component.scss']
})
export class MovieManagementComponent implements OnInit {
  movieForm: FormGroup;
  movies: any[] = JSON.parse(localStorage.getItem('movies') || '[]');
  isEditMode = false;
  selectedMovieId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.movieForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      genre: ['', Validators.required],
      rating: ['', Validators.required],
      votes: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addMovie(): void {
    const newMovie = this.movieForm.value;
    this.movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(this.movies)); // Save to localStorage
    this.movieForm.reset();
  }

  editMovie(movie: any): void {
    this.isEditMode = true;
    this.selectedMovieId = movie.id;
    this.movieForm.patchValue(movie);
  }

  updateMovie(): void {
    if (this.selectedMovieId !== null) {
      const updatedMovie = this.movieForm.value;
      const index = this.movies.findIndex((movie) => movie.id === this.selectedMovieId);
      if (index !== -1) {
        this.movies[index] = updatedMovie;
        localStorage.setItem('movies', JSON.stringify(this.movies)); // Save to localStorage
        this.resetForm();
      }
    }
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    localStorage.setItem('movies', JSON.stringify(this.movies)); // Save to localStorage
  }

  resetForm(): void {
    this.isEditMode = false;
    this.selectedMovieId = null;
    this.movieForm.reset();
  }
}