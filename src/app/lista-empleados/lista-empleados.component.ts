import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  listaEmpleados: Empleado[] = [];

  constructor(
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(): void {
    this.empleadoService.obtenerListaEmpleados().subscribe(empleados => {
      this.listaEmpleados = empleados;
    });
  }

  public actualizarEmpleado(id: number): void {
    
  }

  public eliminarEmpleado(id: number): void {

  }

}
