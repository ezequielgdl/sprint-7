import { Component } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Observable, map, tap } from 'rxjs';
import { Starship, StarshipList } from '../../interfaces/starships';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ships-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ships-list.component.html',
  styleUrl: './ships-list.component.css',
})
export class ShipsListComponent {
  loading: boolean = false;
  currentPage: number = 1;
  starships: Starship[] = [];
  next: string | null = null;
  constructor(private service: StarshipsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships() {
    this.loading = true;
    this.service.getStarshipsList(this.currentPage).subscribe({
      next: (response: StarshipList) => {
        this.starships = [...this.starships, ...response.results];
        this.next = response.next;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onViewMore() {
    if (this.next) {
      this.currentPage++;
      this.loadStarships();
    }
  }
}
