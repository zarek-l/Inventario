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
  costo_unitario: DocumentData[] = [];
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
    this.obtenerCostosUnitariosPorProducto()
  }

  async obtenerBodega() {
    let nombreCol = collection(this.db, 'bodegas');
    let productoSnapshot = await getDocs(nombreCol);
    this.bodegas = productoSnapshot.docs.map(doc => doc.data());
  }

  async obtenerCostosUnitariosPorProducto() {
    let nombreCol = collection(this.db, 'orden_compra');
    let productoSnapshot = await getDocs(nombreCol);
    this.costo_unitario = productoSnapshot.docs.map(doc => doc.data()['costoUnidad']);
    let result = this.costo_unitario.filter((item,index)=>{
      return this.costo_unitario.indexOf(item) === index;
    })
    this.costo_unitario=result
  }

  async obtenerOrdenProducto() {
    let productoCol = collection(this.db, 'orden_compra');
    let productoSnapshot = await getDocs(productoCol);
    this.producto = productoSnapshot.docs.map(doc => doc.data()['producto']);
    let result = this.producto.filter((item,index)=>{
      return this.producto.indexOf(item) === index;
    })
    this.producto=result
  }

  async crearMovimiento(orden_producto: string, tipo: string, fecha: string, bodega: string, cantidad: number, costoUnitario:number) {
    let docRef = await addDoc(collection(this.db, "movimientos"), {
      orden_producto: orden_producto,
      tipo: tipo,
      fecha: fecha,
      bodega: bodega,
      cantidad: cantidad,
      costoUnitario: costoUnitario
    });
    await this.crearMovimientoBodega(orden_producto, bodega, cantidad, costoUnitario,tipo)
    this.mensaje = "Movimiento registrado"
  }

  async obtenerCantidadTotal(nombre_producto: string, bodega: string, tipo: string){
    var ref = query(collection(this.db, "movimientos"));
    let nombreSnapshot = query(ref, where('orden_producto', '==', nombre_producto));
    let nombrebodegaSnapshot = query(nombreSnapshot, where('bodega', '==', bodega));
    let tipoSnapshot = query(nombrebodegaSnapshot, where('tipo', '==', 'Ingreso'));
    const querySnapshot = await getDocs(tipoSnapshot);
      querySnapshot.forEach((doc) => {
        this.producto_cantidad = doc.data()['cantidad'];
        this.cantidad_total += +this.producto_cantidad;
      });
  }

  async obtenerPrecioTotal(nombre_producto: string, bodega: string, tipo: string){
    var ref = query(collection(this.db, "movimiento_bodega"));
    let nombreSnapshot = query(ref, where('orden_producto', '==', nombre_producto));
    let nombrebodegaSnapshot = query(nombreSnapshot, where('bodega', '==', bodega));
    let tipoSnapshot = query(nombrebodegaSnapshot, where('tipo', '==', 'Ingreso'));
    const querySnapshot = await getDocs(tipoSnapshot);
      querySnapshot.forEach((doc) => {
        this.producto_costo = doc.data()['costoTotal'];
        this.costo_total += +this.producto_costo;
      });
  }


  async crearMovimientoBodega(orden_producto: string, bodega: string, cantidad: number, costoUnidad:number, tipo: string) {
    await this.obtenerPrecioTotal(orden_producto, bodega, tipo)
    await this.obtenerCantidadTotal(orden_producto,bodega, tipo)
    if(tipo == 'Ingreso'){
      let docRef = await addDoc(collection(this.db, "movimiento_bodega"), {
        bodega:bodega,
        tipo: tipo,
        orden_producto: orden_producto,
        cantidad: cantidad,
        costoTotal: costoUnidad * cantidad,
        unitarioInstantaneo: ((costoUnidad * cantidad + +this.costo_total)/+this.cantidad_total).toFixed(2)
      });
    }

    else if(tipo == 'Egreso'){
      let docRef = await addDoc(collection(this.db, "movimiento_bodega"), {
        bodega:bodega,
        tipo: tipo,
        orden_producto: orden_producto,
        cantidad: cantidad,
        costoTotal: costoUnidad * cantidad,
        unitarioInstantaneo: 0
      });
    }
  }
}
