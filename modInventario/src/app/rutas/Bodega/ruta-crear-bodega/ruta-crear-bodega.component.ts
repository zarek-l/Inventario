import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getDocs, getFirestore, query} from "@angular/fire/firestore";
import { Router } from '@angular/router';
import {DocumentData} from "firebase/firestore";


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

  async crearBodega(nombre_bodega:string, direccion:string) {
    let docRef = await addDoc(collection(this.db, "bodegas"), {
      nombre_bodega: nombre_bodega,
      direccion: direccion
    });
    this.mensaje = "Bodega registrada"
  }

}
