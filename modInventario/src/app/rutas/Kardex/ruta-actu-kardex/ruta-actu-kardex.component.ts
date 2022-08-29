import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-actu-kardex',
  templateUrl: './ruta-actu-kardex.component.html',
  styleUrls: ['./ruta-actu-kardex.component.scss']
})
export class RutaActuKardexComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idMovimiento = "";
  descripcion :DocumentData[]  =[];
  producto :DocumentData[]  =[];
  bodegas :DocumentData[]  =[];
  movimiento:DocumentData  = []
  costo_unitario: DocumentData[] = [];
  producto_precio: DocumentData[] = [];
  precio: number = 0;
  producto_cantidad: DocumentData[] = [];
  cantidad_total: number = 0;
  producto_costo: DocumentData[] = [];
  costo_total: number = 0;

  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idMovimiento = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerMovimientos()
    this.obtenerOrden()
    this.obtenerBodega()
    this.obtenerCostosUnitariosPorProducto()
  }

  async obtenerMovimientos() {
    let docRef = doc(this.db, "movimientos", this.idMovimiento);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.movimiento =docSnap.data()!!
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

  async obtenerOrden() {
    let productoNCol = collection(this.db, 'orden_compra');
    let productoNSnapshot = await getDocs(productoNCol);
    this.producto = productoNSnapshot.docs.map(doc => doc.data()['producto']);
    let result = this.producto.filter((item,index)=>{
      return this.producto.indexOf(item) === index;
    })
    this.producto=result
  }

  async obtenerBodega(){
    let nombreCol = collection(this.db, 'bodegas');
    let productoSnapshot = await getDocs(nombreCol);
    this.bodegas = productoSnapshot.docs.map(doc => doc.data());
  }


  async actualizarMovimiento(orden_producto: string, tipo: string, fecha: string, bodega: string, cantidad: number, costoUnitario:number) {
    let refDoc = doc(this.db, "movimientos", this.idMovimiento);
    await updateDoc(refDoc, {
      orden_producto: orden_producto,
      tipo: tipo,
      fecha:fecha,
      bodega: bodega,
      cantidad: cantidad,
      costoUnitario: costoUnitario
    })
    await this.actualizarMovimientoBodega(orden_producto, bodega, cantidad, costoUnitario,tipo)
    this.mensaje = "Actualización de movimiento"
  }

  async obtenerCantidadTotal(nombre_producto: string, bodega: string, tipo: string){
    var refE = query(collection(this.db, "movimientos"));
    let nombreSnapshot = query(refE, where('orden_producto', '==', nombre_producto));
    let nombrebodegaSnapshot = query(nombreSnapshot, where('bodega', '==', bodega));
    let tipoSnapshot = query(nombrebodegaSnapshot, where('tipo', '==', 'Ingreso'));
    const querySnapshot = await getDocs(tipoSnapshot);
    querySnapshot.forEach((doc) => {
      this.producto_cantidad = doc.data()['cantidad'];
      this.cantidad_total += +this.producto_cantidad;
      console.log(this.cantidad_total)
    });
  }

  async obtenerPrecioTotal(nombre_producto: string, bodega: string, tipo: string){
    var refE = query(collection(this.db, "movimiento_bodega"));
    let nombreSnapshot = query(refE, where('orden_producto', '==', nombre_producto));
    let nombrebodegaSnapshot = query(nombreSnapshot, where('bodega', '==', bodega));
    let tipoSnapshot = query(nombrebodegaSnapshot, where('tipo', '==', 'Ingreso'));
    const querySnapshot = await getDocs(tipoSnapshot);
    querySnapshot.forEach((doc) => {
      this.producto_costo = doc.data()['costoTotal'];
      this.costo_total += +this.producto_costo;
      console.log(this.costo_total)
    });
  }

  async actualizarMovimientoBodega(orden_producto: string, bodega: string, cantidad: number, costoUnidad:number, tipo: string) {
    await this.obtenerPrecioTotal(orden_producto, bodega, tipo)
    await this.obtenerCantidadTotal(orden_producto, bodega, tipo)
    if (tipo == 'Ingreso') {
      let refDoc = doc(this.db, "movimientos", this.idMovimiento);
      await updateDoc(refDoc, {
        bodega: bodega,
        tipo: tipo,
        orden_producto: orden_producto,
        cantidad: cantidad,
        costoTotal: costoUnidad * cantidad,
        unitarioInstantaneo: ((costoUnidad * cantidad + +this.costo_total) / +this.cantidad_total).toFixed(2)
      })
    }
    else if (tipo == 'Egreso') {
      let refDoc = doc(this.db, "movimientos", this.idMovimiento);
      await updateDoc(refDoc, {
        bodega: bodega,
        tipo: tipo,
        orden_producto: orden_producto,
        cantidad: cantidad,
        costoTotal: costoUnidad * cantidad,
        unitarioInstantaneo: ((costoUnidad * cantidad + +this.costo_total) / +this.cantidad_total).toFixed(2)
      })
    }
  }
}
