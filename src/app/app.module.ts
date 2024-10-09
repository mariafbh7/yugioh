import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  // Nueva forma de importar
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Aquí importamos el RouterModule
import { routes } from './app.routes';  // Importa las rutas desde app.routes.ts
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { CardModule } from './views/card/card.module';
import { CardSearchService } from './controllers/card-search.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './views/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    CardModule
  ],
  providers: [
    CardSearchService,
    provideHttpClient()  // Usa esta nueva forma de proveer HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
