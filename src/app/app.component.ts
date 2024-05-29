import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ShipsListComponent } from './components/ships-list/ships-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShipsListComponent, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint-7';
}
