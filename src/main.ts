import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import {provideHttpClient} from '@angular/common/http';   //Importante importar el HttpClient para 
// conectar el front con el back

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), 
    importProvidersFrom(RouterModule),
    provideHttpClient()],
});