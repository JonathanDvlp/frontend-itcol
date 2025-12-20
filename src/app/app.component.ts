import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'; // Importante para conectar el front con el back
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'APP-cliente';
}
