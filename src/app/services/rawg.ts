import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RawgGameDetailResponse, RawgGamesResponse } from '../models/rawg';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RawgService {
  private http = inject(HttpClient);

  games() {
    return this.http.get<RawgGamesResponse>(`https://api.rawg.io/api/games?key=${environment.RAWG_API_KEY}`);
  }

  gameById(id: string) {
    return this.http.get<RawgGameDetailResponse>(`https://api.rawg.io/api/games/${id}?key=${environment.RAWG_API_KEY}`);
  }
}
