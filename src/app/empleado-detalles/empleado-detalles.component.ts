import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.scss']
})
export class EmpleadoDetallesComponent implements OnInit {

  private id: number;
  public empleado: Empleado;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.obtenerEmpleado();
  }

  obtenerEmpleado(): void {
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(empleado => {
      this.empleado = empleado;
    });
  }

  volver(): void {
    this.location.back();
  }
}
