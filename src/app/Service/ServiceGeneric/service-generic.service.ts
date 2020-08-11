import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sexo } from 'src/app/Modelo/Sexo';
import { Nacionalidad } from 'src/app/Modelo/Nacionalidad';
import { TipoSangre } from 'src/app/Modelo/TipoSangre';
import { EstadoCivil } from 'src/app/Modelo/EstadoCivil';
import { Banco } from 'src/app/Modelo/Banco';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenericService {

  constructor(private http:HttpClient) { }

  URL="http://localhost:8093/recursos/";

  getSexos(){
    return this.http.get<Sexo[]>(this.URL+'sexos');
  }

  getNacionalidades(){
    return this.http.get<Nacionalidad[]>(this.URL+'nacionalidad');
  }

  getTiposSangre(){
    return this.http.get<TipoSangre[]>(this.URL+'tipsang');
  }

  getEstadoCivilList(){
    return this.http.get<EstadoCivil[]>(this.URL+'estcivil');
  }

  getBancos(){
    return this.http.get<Banco[]>(this.URL+'lbancos');
  }

}
