import { Component, Input, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Observable } from 'rxjs';
import { Film } from '../../interfaces/starships';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export class FilmsComponent {
  service = inject(StarshipsService);
  @Input() films!: string[];
  filmsData$!: Observable<Film[]>;

  ngOnInit() {
    if (this.films) {
      this.filmsData$ = this.service.getFilmsDetails(this.films);
    }
    console.log(this.films);
  }

  getPicture(url: string) {
    const id = url.split('/');
    return `https://starwars-visualguide.com/assets/img/films/${id[5]}.jpg`;
  }
}
