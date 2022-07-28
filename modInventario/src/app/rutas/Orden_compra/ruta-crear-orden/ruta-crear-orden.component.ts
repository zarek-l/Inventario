import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getDocs, getFirestore} from "@angular/fire/firestore";
import {DocumentData} from 'firebase/firestore';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-orden',
  templateUrl: './ruta-crear-orden.component.html',
  styleUrls: ['./ruta-crear-orden.component.scss']
})
export class RutaCrearOrdenComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  descripcion :DocumentData[]  =[];
  razon_social :DocumentData[]  =[];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerProducto()
    this.obtenerProveedor()
  }

  async obtenerProducto(){
    let productoCol = collection(this.db, 'productos');
    let productoSnapshot = await getDocs(productoCol);
    this.descripcion = productoSnapshot.docs.map(doc => doc.data());
  }

  async obtenerProveedor(){
    let proveedorCol = collection(this.db, 'proveedores');
    let proveedorSnapshot = await getDocs(proveedorCol);
    this.razon_social = proveedorSnapshot.docs.map(doc => doc.data());
  }

  async crearOrden(proveedor:string, producto:string,fecha:string, cantidad:number, total:number) {
    let docRef = await addDoc(collection(this.db, "orden_compra"), {
      proveedor: proveedor,
      producto: producto,
      fecha: fecha,
      cantidad: cantidad,
      total: total,

    });
    this.mensaje = "Orden de compra registrada"
  }


}
