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

  constructor(private http: HttpClient) {}

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
}
