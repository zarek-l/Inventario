import { Component, OnInit } from '@angular/core';
import {addDoc, collection, getDocs, getFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {DocumentData} from "firebase/firestore";

@Component({
  selector: 'app-ruta-crear-kardex',
  templateUrl: './ruta-crear-kardex.component.html',
  styleUrls: ['./ruta-crear-kardex.component.scss']
})
export class RutaCrearKardexComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  producto :DocumentData[]  =[];
  bodegas :DocumentData[]  =[];
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerOrdenProducto()
    this.obtenerBodega()
  }

  async obtenerBodega(){
    let nombreCol = collection(this.db, 'bodegas');
    let productoSnapshot = await getDocs(nombreCol);
    this.bodegas = productoSnapshot.docs.map(doc => doc.data());
  }

  async obtenerOrdenProducto(){
    let productoCol = collection(this.db, 'orden_compra');
    let productoSnapshot = await getDocs(productoCol);
    this.producto = productoSnapshot.docs.map(doc => doc.data());
  }

  async crearMovimiento(orden_producto: string, tipo: string, fecha: string, bodega: string, cantidad: number) {
    let docRef = await addDoc(collection(this.db, "movimientos"), {
      orden_producto: orden_producto,
      tipo: tipo,
      fecha:fecha,
      bodega: bodega,
      cantidad: cantidad
    });
    this.mensaje = "Movimiento registrado"
  }
}
