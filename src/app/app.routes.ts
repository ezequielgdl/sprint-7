import { Routes } from '@angular/router';
import { ShipsListComponent } from './components/ships-list/ships-list.component';
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: 'starships', component: ShipsListComponent },
  { path: '', component: HomeComponent },
  { path: 'starship/:id', component: ShipDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
