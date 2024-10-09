import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class DeckAnalysisService {
  private apiUrl = 'https://api-deck-analysis.com'; // Reemplaza con la API real

  constructor(private http: HttpClient) {}

  analyzeDeck(selectedCards: Card[]): Observable<any> {
    const cardIds = selectedCards.map(card => card.id).join(',');
    // Llamada a la API de análisis de mazos, pasando los IDs de las cartas
    return this.http.get(`${this.apiUrl}/analyze?cardIds=${cardIds}`);
  }
}
