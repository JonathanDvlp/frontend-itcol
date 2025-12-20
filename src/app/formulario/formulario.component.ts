import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { ClienteService } from '../cliente.service'; 

// Interfaz para el modelo de datos, reflejando el DTO de .NET (Clientedto)
interface ClienteForm {
  nombre: string;
  apellido: string;
  telefono: string;
  tipo_servicio: string;
  correo: string;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  // Importaciones cruciales: Router, Forms y HttpClient para el servicio
  imports : [RouterModule, FormsModule, HttpClientModule], 
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  // Modelo de datos inicial, que se enlaza al HTML
  nuevoCliente: ClienteForm = {
    nombre: '',
    apellido: '',
    telefono: '',
    tipo_servicio: '',
    correo: ''
  };

  // Inyección del servicio para la comunicación con el backend
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Lógica de inicialización aquí si es necesaria
  }

  // Método que se ejecuta al enviar el formulario (por (ngSubmit))
  onSubmit(): void {
    console.log('Datos a enviar:', this.nuevoCliente);

    // Llama al servicio para enviar los datos al backend de .NET
    this.clienteService.addCliente(this.nuevoCliente).subscribe({
      next: (respuesta) => {
        // Solicitud exitosa
        console.log('Respuesta del Backend:', respuesta);
        alert('¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto.'); 
        
        // Limpiar el formulario después del envío exitoso
        this.nuevoCliente = { nombre: '', apellido: '', telefono: '', tipo_servicio: '', correo: '' };
      },
      error: (error) => {
        // Manejo de errores (CORS, 404, 500, etc.)
        console.error('Error al registrar el cliente. Revisa la consola y la configuración CORS/API:', error);
        alert('Error al enviar la solicitud. Por favor, revisa la consola para más detalles.');
      }
    });
  }
}