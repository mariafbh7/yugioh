import { Component , OnInit } from '@angular/core';
import { CardSearchService } from '../../controllers/card-search.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule 
  ],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.css'
})

  export class CardSearchComponent {
    cards: Card[] = [];
    searchTerm: string = ''; 
    filters = {
      fname: '', 
      type: '',
      atk: '',
      def: '',
      level: '',
      race: '',
      attribute: ''
    };
    private searchSubject = new Subject<any>();
    selectedCardId: number | null = null; 
    constructor(private cardSearchService: CardSearchService) {}
  
    ngOnInit() {
      
      this.searchSubject.pipe(
        debounceTime(300) 
      ).subscribe(() => {
        this.searchCards();
      });
    }
  
    
    onFilterChange() {
      this.filters.fname = this.searchTerm; 
      this.searchSubject.next(this.filters); 
    }
  
    
    searchCards() {
      this.cardSearchService.searchCards(this.filters).subscribe({
        next: (data) => {
          this.cards = data.data;  
        },
        error: (error) => {
          console.error('Error al buscar cartas:', error);
        }
      });
    }
  
    
    onSearchInputChange() {
      this.filters.fname = this.searchTerm; 
      this.onFilterChange(); 
    }

    getImageUrl(cardId: number, defaultImage: string = 'CardBack.jpg'): string {
      const imagePath = `${cardId}.jpg`;
    
      return imagePath;
    }

    
    selectCard(cardId: number) {
      this.selectedCardId = this.selectedCardId === cardId ? null : cardId; 
    }
  

}