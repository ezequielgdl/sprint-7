import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship, StarshipList } from '../interfaces/starships';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  constructor(private http: HttpClient) {}

  getStarshipsList(page: number = 1): Observable<StarshipList> {
    return this.http.get<StarshipList>(
      `https://swapi.dev/api/starships?page=${page}`
    );
  }

  getStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(`https://swapi.dev/api/starships/${id}/`);
  }
}
