import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-ruta-olvidar-clave',
  templateUrl: './ruta-olvidar-clave.component.html',
  styleUrls: ['./ruta-olvidar-clave.component.scss']
})
export class RutaOlvidarClaveComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }
  ngOnInit() {
  }
}


