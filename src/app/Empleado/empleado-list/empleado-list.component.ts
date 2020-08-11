import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceEmpleadoService } from 'src/app/Service/ServiceEmpleado/service-empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  empleados:Empleado[];

  constructor(private service:ServiceEmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEmpleados().subscribe(data=>{
      this.empleados=data;
    });
  }

  nuevoEmp(){
    this.router.navigate(["empleado"]);
  }

}
