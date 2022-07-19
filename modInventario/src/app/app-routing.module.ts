import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaOlvidarClaveComponent} from "./rutas/ruta-olvidar-clave/ruta-olvidar-clave.component";
import {RutaVerificarEmailComponent} from "./rutas/ruta-verificar-email/ruta-verificar-email.component";

const routes: Routes = [

  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'olvidar-clave',
    component: RutaOlvidarClaveComponent
  },
  {
    path: 'verificar-email',
    component: RutaVerificarEmailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
