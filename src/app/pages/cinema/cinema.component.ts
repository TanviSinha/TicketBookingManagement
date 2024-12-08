import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  movieId: string = ''; // Movie ID from the route
  cinemaHalls: any[] = []; // Holds the cinema halls for the specific movie

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['movieId'];
    this.fetchCinemaHalls();
  }

  // Define cinema halls data with an index signature for any string key
  fetchCinemaHalls(): void {
    const cinemaHallsData: { [key: string]: { name: string; location: string; timeSlots: string[] }[] } = {
      '1': [  // For 'Pushpa: The Rule - Part 2'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['10:00 AM', '1:30 PM', '5:00 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['11:00 AM', '2:30 PM', '6:30 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['12:00 PM', '3:30 PM', '7:00 PM'] },
      ],
      '2': [  // For 'Bhool Bhulaiyaa 3'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['11:30 AM', '2:30 PM', '5:30 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['12:15 PM', '3:45 PM', '7:30 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['1:00 PM', '4:15 PM', '8:00 PM'] },
      ],
      '3': [  // For 'Moana 2'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['10:30 AM', '1:00 PM', '4:00 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['11:15 AM', '2:45 PM', '6:00 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['12:30 PM', '4:00 PM', '7:30 PM'] },
      ],
      '4': [  // For 'The Sabarmati Report'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['9:45 AM', '12:30 PM', '3:30 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['10:30 AM', '1:30 PM', '4:00 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['11:15 AM', '2:00 PM', '5:30 PM'] },
      ],
      '5': [  // For 'Avatar: The Way of Water'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['9:30 AM', '12:00 PM', '3:00 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['10:00 AM', '1:30 PM', '5:00 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['11:00 AM', '2:30 PM', '6:30 PM'] },
      ],
      '6': [  // For 'Avengers: Endgame'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['9:00 AM', '12:00 PM', '3:30 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['10:15 AM', '1:45 PM', '5:15 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['11:30 AM', '3:00 PM', '6:45 PM'] },
      ],
      '7': [  // For 'Mission: Impossible 7'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['10:00 AM', '1:00 PM', '4:30 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['11:30 AM', '2:30 PM', '6:00 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['12:15 PM', '3:45 PM', '7:15 PM'] },
      ],
      '8': [  // For 'Spider-Man: No Way Home'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['10:00 AM', '1:30 PM', '5:00 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['11:00 AM', '2:30 PM', '6:30 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['12:00 PM', '3:30 PM', '7:00 PM'] },
      ],
      '9': [  // For 'The Batman'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['9:30 AM', '12:30 PM', '4:00 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['10:00 AM', '1:30 PM', '5:00 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['11:00 AM', '2:30 PM', '6:30 PM'] },
      ],
      '10': [  // For 'Jurassic World: Dominion'
        { name: 'Ranchi Cineplex', location: 'Main Road, Ranchi', timeSlots: ['10:30 AM', '1:00 PM', '4:00 PM'] },
        { name: 'PVR Ranchi', location: 'Hinoo, Ranchi', timeSlots: ['11:30 AM', '2:00 PM', '5:30 PM'] },
        { name: 'INOX Ranchi', location: 'Kutchery Road, Ranchi', timeSlots: ['12:15 PM', '3:45 PM', '7:15 PM'] },
      ],
    };

    // Fetch the cinema halls based on the movieId
    this.cinemaHalls = cinemaHallsData[this.movieId] || [];
  }

  goToSeatBooking(cinemaHallId: string, timeSlot: string): void {
    this.router.navigate(['/seat-booking'], {
      queryParams: { cinemaHallId, timeSlot },
    });
  }
}
