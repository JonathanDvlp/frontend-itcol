import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  clientes: any[] = [];
  filtro: string = '';
  mostrarTabla: boolean = false;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {}

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
    if (this.mostrarTabla) this.cargarClientes(); // solo cargar cuando se muestre
  }

  cargarClientes() {
    this.clienteService.getClientes(this.filtro).subscribe({
      next: (data: any) => {
        this.clientes = data;
      },
      error: (err) => console.error('Error al cargar clientes:', err)
    });
  }

  borrarCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe({
      next: () => this.cargarClientes(),
      error: (err) => console.error('Error al eliminar:', err)
    });
  }

  aplicarFiltro() {
    this.cargarClientes(); // trae los datos filtrados desde el backend
  }
}
