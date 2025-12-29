import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './secciones/hero/hero.component';
import { ProblemasComponent } from './secciones/problemas/problemas.component';
import { SolucionesComponent } from './secciones/soluciones/soluciones.component';
import { PorqueElegirnosComponent } from './secciones/porque-elegirnos/porque-elegirnos.component';
import { ProcesoComponent } from './secciones/proceso/proceso.component';
import { CompromisoComponent } from './secciones/compromiso/compromiso.component';
import { NavbarComponent } from './secciones/navbar/navbar.component';  
import { FooterComponent } from './secciones/footer/footer.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports : [RouterModule, HeroComponent, ProblemasComponent, SolucionesComponent, 
    PorqueElegirnosComponent, ProcesoComponent, CompromisoComponent, NavbarComponent,FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
