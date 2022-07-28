import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getFirestore} from "@angular/fire/firestore";
import { Router } from '@angular/router';


@Component({
  selector: 'app-ruta-crear-bodega',
  templateUrl: './ruta-crear-bodega.component.html',
  styleUrls: ['./ruta-crear-bodega.component.scss']
})
export class RutaCrearBodegaComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  async crearOrden(nombre_bodega:string, direccion:string) {
    let docRef = await addDoc(collection(this.db, "bodegas"), {
      nombre_bodega: nombre_bodega,
      direccion: direccion
    });
    this.mensaje = "Bodega registrada"
  }

}
