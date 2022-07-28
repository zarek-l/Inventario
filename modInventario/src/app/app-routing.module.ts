import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaOlvidarClaveComponent} from "./rutas/ruta-olvidar-clave/ruta-olvidar-clave.component";
import {RutaVerificarEmailComponent} from "./rutas/ruta-verificar-email/ruta-verificar-email.component";
import {AuthGuard} from "./servicios/guard/auth.guard";
import {RutaDashboardComponent} from "./rutas/ruta-dashboard/ruta-dashboard.component";
import {RutaCrearProductoComponent} from "./rutas/Prdoducto/ruta-crear-producto/ruta-crear-producto.component";
import {RutaListarProveedorComponent} from "./rutas/Proveedor/ruta-listar-proveedor/ruta-listar-proveedor.component";
import {RutaCrearProveedorComponent} from "./rutas/Proveedor/ruta-crear-proveedor/ruta-crear-proveedor.component";
import {RutaCrearOrdenComponent} from "./rutas/Orden_compra/ruta-crear-orden/ruta-crear-orden.component";
import {RutaListarOrdenComponent} from "./rutas/Orden_compra/ruta-listar-orden/ruta-listar-orden.component";
import {RutaCrearBodegaComponent} from "./rutas/Bodega/ruta-crear-bodega/ruta-crear-bodega.component";
import {RutaListarBodegaComponent} from "./rutas/Bodega/ruta-listar-bodega/ruta-listar-bodega.component";
import {RutaListarKardexComponent} from "./rutas/Kardex/ruta-listar-kardex/ruta-listar-kardex.component";
import {RutaCrearKardexComponent} from "./rutas/Kardex/ruta-crear-kardex/ruta-crear-kardex.component";
import {RutaListarProductosComponent} from "./rutas/Prdoducto/ruta-listar-productos/ruta-listar-productos.component";

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
  { path: 'dashboard',
    component: RutaDashboardComponent,
    canActivate: [AuthGuard]
  },

  //CRUD PRODUCTO
  { path: 'crear-producto',
    component: RutaCrearProductoComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listar-producto',
    component: RutaListarProductosComponent,
    canActivate: [AuthGuard]
  },

  //CRUD PROVEEDOR
  { path: 'crear-proveedor',
    component: RutaCrearProveedorComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listar-proveedor',
    component: RutaListarProveedorComponent,
    canActivate: [AuthGuard]
  },

  //CRUD ORDEN DE COMPRA
  { path: 'crear-orden',
    component: RutaCrearOrdenComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listar-orden',
    component: RutaListarOrdenComponent,
    canActivate: [AuthGuard]
  },

  //CRUD BODEGA
  { path: 'crear-bodega',
    component: RutaCrearBodegaComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listar-bodega',
    component: RutaListarBodegaComponent,
    canActivate: [AuthGuard]
  },

  //CRUD KARDEX
  { path: 'crear-kardex',
    component: RutaCrearKardexComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listar-kardex',
    component: RutaListarKardexComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
