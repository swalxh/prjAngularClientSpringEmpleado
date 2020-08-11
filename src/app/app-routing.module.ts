import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoFormComponent } from './Empleado/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './Empleado/empleado-list/empleado-list.component';
import { DatosLabFormComponent } from './DatosLaborales/datos-lab-form/datos-lab-form.component';
import { DatosLabListComponent } from './DatosLaborales/datos-lab-list/datos-lab-list.component';
import { TarjetaBancariaFormComponent } from './TarjetaBancaria/tarjeta-bancaria-form/tarjeta-bancaria-form.component';
import { TarjetaBancariaListComponent } from './TarjetaBancaria/tarjeta-bancaria-list/tarjeta-bancaria-list.component';
import { MovimientosFormComponent } from './Movimientos/movimientos-form/movimientos-form.component';
import { MovimientosListComponent } from './Movimientos/movimientos-list/movimientos-list.component';
import { HeaderComponent } from './inicio/header/header.component';

const routes: Routes = [
  {path:'',component:EmpleadoListComponent},
  {path:'empleado',component:EmpleadoFormComponent},
  {path:'lempleado',component:EmpleadoListComponent},
  {path:'dlab',component:DatosLabFormComponent},
  {path:'ldlab',component:DatosLabListComponent},
  {path:'tbancaria',component:TarjetaBancariaFormComponent},
  {path:'ltbancaria',component:TarjetaBancariaListComponent},
  {path:'movimiento',component:MovimientosFormComponent},
  {path:'lmovimientos',component:MovimientosListComponent},
  {path:"header",component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
