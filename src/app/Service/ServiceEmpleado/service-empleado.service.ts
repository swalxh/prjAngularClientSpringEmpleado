import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from 'src/app/Modelo/Empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpleadoService {

  constructor(private http:HttpClient) { }

  URL='http://localhost:8093/empleado/';

  getEmpleados(){
    return this.http.get<Empleado[]>(this.URL+'all');
  }
  createEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.URL+'registrar',empleado);
  }
}
