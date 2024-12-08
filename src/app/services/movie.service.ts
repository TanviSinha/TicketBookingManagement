import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: string;
  votes: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private predefinedMovies  = [
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

  constructor() {
    // Initialize local storage with predefined movies if not already present
    const storedMovies = JSON.parse(localStorage.getItem('movies') || '[]');
    if (storedMovies.length === 0) {
      localStorage.setItem('movies', JSON.stringify(this.predefinedMovies));
    }
  }

  getMovies() {
    return JSON.parse(localStorage.getItem('movies') || '[]');
  }

  addMovie(movie: Movie): void {
    const movies = this.getMovies();
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  updateMovie(updatedMovie: Movie): void {
    let movies = this.getMovies();
    movies = movies.map((movie: Movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  deleteMovie(movieId: number): void {
    const movies = this.getMovies().filter((movie: Movie) => movie.id !== movieId);
    localStorage.setItem('movies', JSON.stringify(movies));
  }
}