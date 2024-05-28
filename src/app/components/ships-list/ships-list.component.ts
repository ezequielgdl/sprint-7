import { Component } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Observable } from 'rxjs';
import { StarshipList } from '../../interfaces/starships';
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
  public starshipList$!: Observable<StarshipList>;
  constructor(private service: StarshipsService) {}

  ngOnInit(): void {
    this.starshipList$ = this.service.getStarshipsList();
  }
}
