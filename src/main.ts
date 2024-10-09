import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Importar provideHttpClient
import { provideRouter } from '@angular/router'; // Importar provideRouter
import { routes } from './app/app.routes'; // Asegúrate de que las rutas estén definidas en app.routes

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)], // Registrar HttpClient aquí
}).catch((err) => console.error(err));
