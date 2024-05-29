import { Routes } from '@angular/router';
import { ShipsListComponent } from './components/ships-list/ships-list.component';
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'starships', component: ShipsListComponent },
  { path: '', component: HomeComponent },
  { path: 'starship/:id', component: ShipDetailsComponent },
];
