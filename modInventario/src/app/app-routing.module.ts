import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";

const routes: Routes = [

  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
