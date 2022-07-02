import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.scss']
})
export class RegistrarEmpleadoComponent implements OnInit {

  public empleado: Empleado = new Empleado();

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  public onSubmit(): void {
    this.guardarEmpleado();
  }

  /* La forma en como esto se hace en el tutorial original implica usar un callback como error. 
     Temporalmente esto se omite */
  public guardarEmpleado() {
    this.empleadoService.registrarEmpleado(this.empleado).subscribe((dato: any) => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    });
  }

  public irALaListaDeEmpleados(): void {
    this.router.navigate(['/empleados']);
  }

}
