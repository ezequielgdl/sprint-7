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
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
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
      username: ['', Validators.required],
    });
  }

  register() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please select a valid username and password';
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.register(credentials).subscribe({
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
