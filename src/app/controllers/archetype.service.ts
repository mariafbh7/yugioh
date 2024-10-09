import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArchetypeService {

  private apiUrl = 'https://db.ygoprodeck.com/api/v7/archetypes.php'; // Cambia esto a tu URL

  constructor(private http: HttpClient) {}

  getArchetypes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
