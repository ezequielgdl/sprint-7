import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Starship } from '../../interfaces/starships';
import { StarshipsService } from '../../services/starships.service';
import { CommonModule } from '@angular/common';
import { PilotsComponent } from '../pilots/pilots.component';
import { FilmsComponent } from '../films/films.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ship-details',
  standalone: true,
  imports: [CommonModule, PilotsComponent, FilmsComponent, RouterLink],
  templateUrl: './ship-details.component.html',
  styleUrl: './ship-details.component.css',
})
export class ShipDetailsComponent implements OnInit {
  loading: boolean = false;
  @Input() id!: string;
  starship$!: Observable<Starship>;
  starshipImageUrl: string = '';

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.starship$ = this.starshipsService.getStarshipById(this.id).pipe(
      tap(() => (this.loading = false)),
      map((starship) => {
        this.loadStarshipImage(starship.url);
        return starship;
      })
    );
  }

  getPicture(url: string): string {
    const id = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }

  loadStarshipImage(url: string): void {
    const imageUrl = this.getPicture(url);

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      this.starshipImageUrl = imageUrl;
    };

    img.onerror = () => {
      this.starshipImageUrl = 'assets/big-placeholder.jpeg'; // Set a placeholder image
    };
  }
}
