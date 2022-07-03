import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private empleadoService: EmpleadoService,
    private router: Router
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
    this.router.navigate(['/actualizar-empleado', id]);
  }

  public eliminarEmpleado(id: number): void {
    this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }

}
