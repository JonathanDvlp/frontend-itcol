import { environment } from '../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClienteService {

  private apiUrl = environment.apiURL + '/cliente';

  constructor(private http: HttpClient) {}

  getClientes(nombre?: string) {
    let params = new HttpParams();
    if (nombre) {
      params = params.set('nombre', nombre);
    }
    return this.http.get(this.apiUrl, { params });
  }

  getCliente(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addCliente(cliente: any) {
    return this.http.post(this.apiUrl, cliente);
  }

  updateCliente(cliente: any) {
    return this.http.put(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

