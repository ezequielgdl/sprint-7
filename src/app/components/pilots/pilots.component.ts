import { Component, Input, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Pilot } from '../../interfaces/starships';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.css',
})
export class PilotsComponent {
  service = inject(StarshipsService);
  @Input() pilots!: string[];
  pilotsData$!: Observable<Pilot[]>;

  ngOnInit() {
    if (this.pilots) {
      this.pilotsData$ = this.service.getPilotsDetails(this.pilots);
    }
    console.log(this.pilots);
  }

  getPicture(url: string) {
    const id = url.split('/');
    return `https://starwars-visualguide.com/assets/img/characters/${id[5]}.jpg`;
  }
}
