import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-proveedor',
  templateUrl: './ruta-crear-proveedor.component.html',
  styleUrls: ['./ruta-crear-proveedor.component.scss']
})
export class RutaCrearProveedorComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  async crearProveedor(ruc:string, razon_social:string,correo:string, telefono:string, categoria:string) {
    let docRef = await addDoc(collection(this.db, "proveedores"), {
      ruc: ruc,
      razon_social: razon_social,
      correo: correo,
      telefono: telefono,
      categoria: categoria,
    });
    this.mensaje = "Proveedor registrado"
  }
}
