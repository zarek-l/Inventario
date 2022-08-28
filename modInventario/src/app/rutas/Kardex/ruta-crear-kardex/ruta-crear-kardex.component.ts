import { Component, OnInit } from '@angular/core';
import {addDoc, collection, getDocs, getFirestore, query, where} from "@angular/fire/firestore";
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
  mensaje: string = "";
  producto: DocumentData[] = [];
  bodegas: DocumentData[] = [];
  producto_precio: DocumentData[] = [];
  precio: number = 0;
  producto_cantidad: DocumentData[] = [];
  cantidad_total: number = 0;
  producto_costo: DocumentData[] = [];
  costo_total: number = 0;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.obtenerOrdenProducto()
    this.obtenerBodega()
  }

  async obtenerBodega() {
    let nombreCol = collection(this.db, 'bodegas');
    let productoSnapshot = await getDocs(nombreCol);
    this.bodegas = productoSnapshot.docs.map(doc => doc.data());
  }

  async obtenerOrdenProducto() {
    let productoCol = collection(this.db, 'orden_compra');
    let productoSnapshot = await getDocs(productoCol);
    this.producto = productoSnapshot.docs.map(doc => doc.data());
  }

  async crearMovimiento(orden_producto: string, tipo: string, fecha: string, bodega: string, cantidad: number) {
    let docRef = await addDoc(collection(this.db, "movimientos"), {
      orden_producto: orden_producto,
      tipo: tipo,
      fecha: fecha,
      bodega: bodega,
      cantidad: cantidad
    });
    await this.obtenerPrecioProducto(orden_producto)
    await this.crearMovimientoBodega(orden_producto, bodega, cantidad)
    this.mensaje = "Movimiento registrado"
  }

  async obtenerPrecioProducto(nombre_producto: string) {
    let nombreCol = collection(this.db, 'productos');
    let nombreSnapshot = query(nombreCol, where('descripcion', '==', nombre_producto));
    let productoQ = await getDocs(nombreSnapshot);
    this.producto_precio = productoQ.docs.map(doc => doc.data()['precio']);
    this.precio = +this.producto_precio;
  }

  async obtenerCantidadTotal(nombre_producto: string){
    var ref = query(collection(this.db, "movimiento_bodega"));
    let nombreSnapshot = query(ref, where('orden_producto', '==', nombre_producto));
    const querySnapshot = await getDocs(nombreSnapshot);
    querySnapshot.forEach((doc) => {
        this.producto_cantidad = doc.data()['cantidad'];
        this.cantidad_total += +this.producto_cantidad;
    });
  }

  async obtenerPrecioTotal(nombre_producto: string){
    var ref = query(collection(this.db, "movimiento_bodega"));
    let nombreSnapshot = query(ref, where('orden_producto', '==', nombre_producto));
    const querySnapshot = await getDocs(nombreSnapshot);
    querySnapshot.forEach((doc) => {
      this.producto_costo = doc.data()['costoTotal'];
      this.costo_total += +this.producto_costo;
    });
  }


  async crearMovimientoBodega(orden_producto: string, bodega: string, cantidad: number) {
    await this.obtenerCantidadTotal(orden_producto)
    await this.obtenerPrecioTotal(orden_producto)
    let docRef = await addDoc(collection(this.db, "movimiento_bodega"), {
      orden_producto: orden_producto,
      cantidad: cantidad,
      costoTotal: this.precio*cantidad,
      costoUnitario: this.costo_total/this.cantidad_total
    });
  }
}
