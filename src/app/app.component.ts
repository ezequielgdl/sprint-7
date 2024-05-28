import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShipsListComponent } from './components/ships-list/ships-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShipsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint-7';
}
