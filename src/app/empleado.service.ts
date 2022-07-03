import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:8080/api/v1/empleados';

  constructor(
    private http: HttpClient
  ) { }

  /* Enlistar todos los empleados */
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}`);
  }

  /* Registrar un empleado */
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, empleado);
  }

  /* Obtener empleado por ID */
  obtenerEmpleadoPorId(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/id`);
  }

  /* Eliminar empleado por ID */
  eliminarEmpleado(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/id`);
  }
}
