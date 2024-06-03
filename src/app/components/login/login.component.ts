import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in username and password';
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (data) => {
        this.errorMessage = '';
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid username or password';
        console.error('Login error:', error);
      },
      complete: () => {
        console.log('Login observable completed');
      },
    });
  }
}
