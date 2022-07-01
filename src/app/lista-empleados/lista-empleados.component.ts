import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  listaEmpleados: Empleado[] = [
    {id:1, nombre: 'Perico', apellido: 'De Los Palotes', email: 'perico@mail.com'},
    {id:2, nombre: 'Juan', apellido: 'Charrasqueado', email: 'juan@mail.com'},
    {id:3, nombre: 'John', apellido: 'Doe', email: 'john@mail.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
