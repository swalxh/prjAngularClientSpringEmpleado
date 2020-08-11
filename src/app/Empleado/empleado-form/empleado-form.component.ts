import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Sexo } from 'src/app/Modelo/Sexo';
import { Nacionalidad } from 'src/app/Modelo/Nacionalidad';
import { TipoSangre } from 'src/app/Modelo/TipoSangre';
import { EstadoCivil } from 'src/app/Modelo/EstadoCivil';
import { ServiceGenericService } from 'src/app/Service/ServiceGeneric/service-generic.service';
import { ServiceEmpleadoService } from 'src/app/Service/ServiceEmpleado/service-empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  estadosciv:EstadoCivil[];
  sexos:Sexo[];
  ltsangre:TipoSangre[];
  nacionalidades:Nacionalidad[];

  constructor(private router:Router,
    private serviceEmpleado:ServiceEmpleadoService,
    private serviceGeneric:ServiceGenericService) { }

  ngOnInit(): void {
    this.serviceGeneric.getEstadoCivilList().subscribe(data=>{
      this.estadosciv=data;
    });
    this.serviceGeneric.getSexos().subscribe(data=>{
      this.sexos=data;
    });
    this.serviceGeneric.getNacionalidades().subscribe(data=>{
      this.nacionalidades=data;
    });
    this.serviceGeneric.getTiposSangre().subscribe(data=>{
      this.ltsangre=data;
    });
  }

  Guardar(empleado:Empleado){
    this.serviceEmpleado.createEmpleado(empleado).subscribe(data=>{
      alert("Se ha registrado el empleado");
      this.router.navigate(["lempleados"]);
    })
  }    

}
