import { Component, OnInit } from '@angular/core';
import {addDoc, collection, getFirestore} from "@angular/fire/firestore";
import {environment} from "../../../../environments/environment";
import { initializeApp } from 'firebase/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-producto',
  templateUrl: './ruta-crear-producto.component.html',
  styleUrls: ['./ruta-crear-producto.component.scss']
})
export class RutaCrearProductoComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  valor:any;

  constructor(
    public router: Router

  ) { }

  ngOnInit(): void {

  }
  async crearProducto(descripcion:string, categoria:string) {
    let docRef = await addDoc(collection(this.db, "productos"), {
      descripcion: descripcion,
      categoria: categoria,
    });
    this.mensaje = "Producto registrado"

  }
}
