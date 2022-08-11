import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, doc, getDoc, getDocs, getFirestore, updateDoc} from "@angular/fire/firestore";
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
  movimiento:DocumentData  = []

  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idMovimiento = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerMovimientos()
    this.obtenerOrden()
  }

  async obtenerMovimientos() {
    let docRef = doc(this.db, "movimientos", this.idMovimiento);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.movimiento =docSnap.data()!!
  }

  async obtenerOrden(){
    let productoCol = collection(this.db, 'orden_compra');
    let productoSnapshot = await getDocs(productoCol);
    this.producto = productoSnapshot.docs.map(doc => doc.data());
  }

  async actualizarMovimiento(orden_producto: string, tipo: string, fecha: string, costo_unitario: number, cantidad: number) {
    let refDoc = doc(this.db, "movimientos", this.idMovimiento);
    await updateDoc(refDoc, {
      orden_producto: orden_producto,
      tipo: tipo,
      fecha:fecha,
      costo_unitario: costo_unitario,
      cantidad: cantidad
    })
    this.mensaje = "Actualización de movimiento"
  }
}
