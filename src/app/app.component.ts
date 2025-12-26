import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'; // Importante para conectar el front con el back
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './inicio/secciones/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule,FormsModule, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'APP-cliente';
}
