import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleadoService } from 'src/app/Service/ServiceEmpleado/service-empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  constructor(private router:Router,private service:ServiceEmpleadoService) { }

  ngOnInit(): void {
  }

  Guardar(){
    
  }    

}
