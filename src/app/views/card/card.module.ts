import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { CardSearchComponent } from '../card-search/card-search.component';
import { MenuComponent } from '../menu/menu.component';
import { DuelSimulatorComponent } from '../duel-simulator/duel-simulator.component';
/* import { RouterModule } from '@angular/router';
import { routes } from '.../app.routes'; */
@NgModule({
  declarations: [
    CardSearchComponent,
    MenuComponent,
    DuelSimulatorComponent
  ],
  imports: [
    CommonModule, // Asegúrate de incluir CommonModule aquí
    FormsModule   // Y FormsModule también
  ],
  exports: [
    CardSearchComponent,
    MenuComponent,
    DuelSimulatorComponent
  ]
})
export class CardModule {}
