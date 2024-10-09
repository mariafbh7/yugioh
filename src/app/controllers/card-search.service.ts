import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardSearchService {
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) {}

  // Método para buscar cartas con múltiples filtros
  searchCards(filters: any): Observable<{ data: Card[] }> {
    let params = new HttpParams();

    // Añadir filtros dinámicamente
    if (filters.fname) {  // Coincidencia parcial
      params = params.set('fname', filters.fname);
    }
    if (filters.type) {
      params = params.set('type', filters.type);
    }
    if (filters.atk) {
      params = params.set('atk', filters.atk);
    }
    if (filters.def) {
      params = params.set('def', filters.def);
    }
    if (filters.level) {
      params = params.set('level', filters.level);
    }
    if (filters.race) {
      params = params.set('race', filters.race);
    }
    if (filters.attribute) {
      params = params.set('attribute', filters.attribute);
    }

    // Retornar la observación de la API, tipada con el modelo
    return this.http.get<{ data: Card[] }>(this.apiUrl, { params });
  }
}
