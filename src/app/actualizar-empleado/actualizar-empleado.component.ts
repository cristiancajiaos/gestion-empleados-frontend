import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.scss']
})
export class ActualizarEmpleadoComponent implements OnInit {

  private id: number;
  public empleado: Empleado;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empleado = new Empleado();
    this.obtenerId();
  }

  private obtenerId(): void {
    this.obtenerDetallesEmpleado();
  }

  private obtenerDetallesEmpleado(): void {
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(empleado => {
      this.empleado = empleado;
    });
  }

  public onSubmit(): void {
    this.actualizarEmpleado();
  }

  private actualizarEmpleado(): void {
    this.empleadoService.modificarEmpleadoPorId(this.id, this.empleado).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['/empleados']);
    });
  }

  public volver(): void {
    this.location.back();
  }
}
