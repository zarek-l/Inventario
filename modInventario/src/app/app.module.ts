import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarModule} from 'src/app/componentes/nav-bar/nav-bar.module';
import {SideBarModule} from "./componentes/side-bar/side-bar.module";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

//importar modules de firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./servicios/auth.service";
import { RutaOlvidarClaveComponent } from './rutas/ruta-olvidar-clave/ruta-olvidar-clave.component';
import { RutaVerificarEmailComponent } from './rutas/ruta-verificar-email/ruta-verificar-email.component';
import { RutaDashboardComponent } from './rutas/ruta-dashboard/ruta-dashboard.component';
import { RutaCrearProductoComponent } from './rutas/Prdoducto/ruta-crear-producto/ruta-crear-producto.component';
import { RutaListarProductosComponent } from './rutas/Prdoducto/ruta-listar-productos/ruta-listar-productos.component';
import { RutaCrearProveedorComponent } from './rutas/Proveedor/ruta-crear-proveedor/ruta-crear-proveedor.component';
import { RutaListarProveedorComponent } from './rutas/Proveedor/ruta-listar-proveedor/ruta-listar-proveedor.component';
import { RutaCrearOrdenComponent } from './rutas/Orden_compra/ruta-crear-orden/ruta-crear-orden.component';
import { RutaListarOrdenComponent } from './rutas/Orden_compra/ruta-listar-orden/ruta-listar-orden.component';
import { RutaCrearBodegaComponent } from './rutas/Bodega/ruta-crear-bodega/ruta-crear-bodega.component';
import { RutaListarBodegaComponent } from './rutas/Bodega/ruta-listar-bodega/ruta-listar-bodega.component';
import { RutaCrearKardexComponent } from './rutas/Kardex/ruta-crear-kardex/ruta-crear-kardex.component';
import { RutaListarKardexComponent } from './rutas/Kardex/ruta-listar-kardex/ruta-listar-kardex.component';
import { RutaActuBodegaComponent } from './rutas/Bodega/ruta-actu-bodega/ruta-actu-bodega.component';
import { RutaActuKardexComponent } from './rutas/Kardex/ruta-actu-kardex/ruta-actu-kardex.component';
import { RutaActuOrdenComponent } from './rutas/Orden_compra/ruta-actu-orden/ruta-actu-orden.component';
import { RutaActuProductoComponent } from './rutas/Prdoducto/ruta-actu-producto/ruta-actu-producto.component';
import { RutaActuProveedorComponent } from './rutas/Proveedor/ruta-actu-proveedor/ruta-actu-proveedor.component';
import { RutaListarCasilleroComponent } from './rutas/Bodega/Casillero/ruta-listar-casillero/ruta-listar-casillero.component';
import { RutaCrearCasilleroComponent } from './rutas/Bodega/Casillero/ruta-crear-casillero/ruta-crear-casillero.component';
import { RutaActuCasilleroComponent } from './rutas/Bodega/Casillero/ruta-actu-casillero/ruta-actu-casillero.component';
import { RutaListarMovimientosComponent } from './rutas/Bodega/MovBodega/ruta-listar-movimientos/ruta-listar-movimientos.component';


@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaInicioComponent,
    RutaOlvidarClaveComponent,
    RutaVerificarEmailComponent,
    RutaDashboardComponent,
    RutaCrearProductoComponent,
    RutaListarProductosComponent,
    RutaCrearProveedorComponent,
    RutaListarProveedorComponent,
    RutaCrearOrdenComponent,
    RutaListarOrdenComponent,
    RutaCrearBodegaComponent,
    RutaListarBodegaComponent,
    RutaCrearKardexComponent,
    RutaListarKardexComponent,
    RutaActuBodegaComponent,
    RutaActuKardexComponent,
    RutaActuOrdenComponent,
    RutaActuProductoComponent,
    RutaActuProveedorComponent,
    RutaListarCasilleroComponent,
    RutaCrearCasilleroComponent,
    RutaActuCasilleroComponent,
    RutaListarMovimientosComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatTreeModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        NavBarModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        SideBarModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        FormsModule,

    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
