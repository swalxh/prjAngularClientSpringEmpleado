import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleadoService } from '../app/Service/ServiceEmpleado/service-empleado.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './Empleado/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './Empleado/empleado-form/empleado-form.component';
import { MovimientosListComponent } from './Movimientos/movimientos-list/movimientos-list.component';
import { MovimientosFormComponent } from './Movimientos/movimientos-form/movimientos-form.component';
import { DatosLabFormComponent } from './DatosLaborales/datos-lab-form/datos-lab-form.component';
import { DatosLabListComponent } from './DatosLaborales/datos-lab-list/datos-lab-list.component';
import { TarjetaBancariaListComponent } from './TarjetaBancaria/tarjeta-bancaria-list/tarjeta-bancaria-list.component';
import { TarjetaBancariaFormComponent } from './TarjetaBancaria/tarjeta-bancaria-form/tarjeta-bancaria-form.component';
import { HeaderComponent } from './inicio/header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    EmpleadoFormComponent,
    MovimientosListComponent,
    MovimientosFormComponent,
    DatosLabFormComponent,
    DatosLabListComponent,
    TarjetaBancariaListComponent,
    TarjetaBancariaFormComponent,
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
