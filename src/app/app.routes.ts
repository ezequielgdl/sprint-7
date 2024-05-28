import { Routes } from '@angular/router';
import { ShipsListComponent } from './components/ships-list/ships-list.component';
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';

export const routes: Routes = [
  { path: '', component: ShipsListComponent },
  { path: 'starship/:id', component: ShipDetailsComponent },
];
