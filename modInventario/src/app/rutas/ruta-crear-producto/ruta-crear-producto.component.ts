import { Component, OnInit } from '@angular/core';
import {addDoc, collection, getFirestore} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-ruta-crear-producto',
  templateUrl: './ruta-crear-producto.component.html',
  styleUrls: ['./ruta-crear-producto.component.scss']
})
export class RutaCrearProductoComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  constructor() { }

  ngOnInit(): void {
  }
  async crearProducto(descripcion:string, categoria:string,precio:number) {
    let docRef = await addDoc(collection(this.db, "productos"), {
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
    });
    this.mensaje = "Producto registrado"
  }
}
