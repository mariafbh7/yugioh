import { Routes } from '@angular/router';
import { CardSearchComponent } from './views/card-search/card-search.component';
// import { DeckAnalysisComponent } from './views/deck-analysis/deck-analysis.component';
import { DuelSimulatorComponent } from './views/duel-simulator/duel-simulator.component';
import { MenuComponent } from './views/menu/menu.component';
export const routes: Routes = [
  {
    path: 'cards',  // Ruta principal para el módulo de tarjetas
    children: [
      { path: 'search', component: CardSearchComponent },
    //   { path: 'analyze', component: DeckAnalysisComponent },
      { path: 'duel', component: DuelSimulatorComponent },
      { path: '', redirectTo: 'cards', pathMatch: 'full' }, // Redirige a la búsqueda por defecto
    ]
  },
  { path: '', redirectTo: '/cards/search', pathMatch: 'full' }, // Redirige a la ruta principal de tarjetas
];
