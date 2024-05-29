import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Starship } from '../../interfaces/starships';
import { StarshipsService } from '../../services/starships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ship-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ship-details.component.html',
  styleUrl: './ship-details.component.css',
})
export class ShipDetailsComponent {
  loading: boolean = false;
  @Input() id!: string;
  starship$!: Observable<Starship>;

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.starship$ = this.starshipsService
      .getStarshipById(this.id)
      .pipe(tap(() => (this.loading = false)));
  }
}
