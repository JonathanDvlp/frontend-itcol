import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TIComponent } from './ti/ti.component';
import { ElectronicaComponent } from './electronica/electronica.component';
import { BiomedicaComponent } from './biomedica/biomedica.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdminComponent } from './admin/admin.component';
import { TablasComponent } from './tablas/tablas.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // ruta principal
  {path: 'inicio', component:InicioComponent}, // redirección para rutas no definidas
  { path: 'servicios', component: ServiciosComponent }, // ruta principal
  { path: 'ti', component: TIComponent }, // ruta para servicios TI
  { path: 'electronica', component: ElectronicaComponent }, // ruta para servicios de electrónica
  { path: 'biomedica', component: BiomedicaComponent }, // ruta para servicios de biomedicina
  { path: 'formulario', component: FormularioComponent}, // ruta para el formulario
  { path: 'admin', component: AdminComponent}, // ruta al administrador de la pagina
  {path:'tablas', component:TablasComponent},

];  