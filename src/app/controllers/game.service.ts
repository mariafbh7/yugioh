import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Player } from '../models/player.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private player1: Player;
  private player2: Player;
  private currentPlayer: Player;
  private isGameOver: boolean = false;

  constructor() {
    this.player1 = { name: 'Player 1', lifePoints: 8000, hand: [], field: [] };
    this.player2 = { name: 'Player 2', lifePoints: 8000, hand: [], field: [] };
    this.currentPlayer = this.player1;
  }

  startGame() {
    // Inicializa el juego y reparte las cartas a los jugadores
    this.isGameOver = false;
    console.log("Game Started!");
    this.dealCards();
  }

  dealCards() {
    // Ejemplo: Repartimos cartas ficticias
    const sampleCard: Card = {
      id: 34541863,
      name: 'A Cell Breeding Device',
      type: 'Spell Card',
      effect: () => console.log('Applying the effect of A Cell Breeding Device')
    };

    this.player1.hand.push(sampleCard);
    this.player2.hand.push(sampleCard);
  }

  playCard(card: Card) {
    if (card.type === 'Monster') {
      this.currentPlayer.field.push(card);
    } else {
      card.effect?.();
    }
  }

  attack(attackingCard: Card, defendingCard: Card) {
    if (attackingCard.attackPoints && defendingCard.defensePoints) {
      const damage = Math.max(0, attackingCard.attackPoints - defendingCard.defensePoints);
      this.currentPlayer === this.player1 ? this.player2.lifePoints -= damage : this.player1.lifePoints -= damage;
      console.log(`Attack dealt ${damage} damage!`);
    }
  }

  switchTurn() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  checkGameOver(): boolean {
    if (this.player1.lifePoints <= 0 || this.player2.lifePoints <= 0) {
      this.isGameOver = true;
      return true;
    }
    return false;
  }

  getGameStatus() {
    return {
      player1: this.player1,
      player2: this.player2,
      currentPlayer: this.currentPlayer,
      isGameOver: this.isGameOver
    };
  }
}

