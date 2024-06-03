import { Component, inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  authService = inject(AuthService);
  username = '';

  ngOnInit() {
    this.username = this.authService.getUsername;
  }
}
