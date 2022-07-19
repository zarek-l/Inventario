import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavBarModule} from 'src/app/componentes/nav-bar/nav-bar.module';

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

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaInicioComponent,
    RutaOlvidarClaveComponent,
    RutaVerificarEmailComponent,
    RutaDashboardComponent
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
