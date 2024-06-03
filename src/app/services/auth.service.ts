import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private jwtToken = '';
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      this.jwtToken = token;
      this.loggedIn.next(true);
    }
  }

  login(credentials: any) {
    return this.http.post<any>(`http://localhost:3000/login`, credentials).pipe(
      map((response) => {
        this.jwtToken = response.token;
        this.loggedIn.next(true);
        localStorage.setItem('jwtToken', this.jwtToken);
        return true;
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  get getJwtToken(): string {
    return this.jwtToken;
  }

  logout() {
    this.jwtToken = '';
    this.loggedIn.next(false);
    localStorage.removeItem('jwtToken');
  }
}
