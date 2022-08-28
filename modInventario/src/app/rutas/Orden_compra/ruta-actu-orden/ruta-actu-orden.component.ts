import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, doc, getDoc, getDocs, getFirestore, updateDoc} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-actu-orden',
  templateUrl: './ruta-actu-orden.component.html',
  styleUrls: ['./ruta-actu-orden.component.scss']
})
export class RutaActuOrdenComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idOrden = "";
  descripcion :DocumentData[]  =[];
  razon_social :DocumentData[]  =[];
  orden:DocumentData  = []

  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idOrden = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerProducto()
    this.obtenerProveedor()
    this.obtenerOrden()
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

  async obtenerOrden() {
    let docRef = doc(this.db, "orden_compra", this.idOrden);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.orden =docSnap.data()!!
  }

  async actualizarOrden(proveedor:string, producto:string,fecha:string, cantidad:number, costoUnidad: number) {
    let refDoc = doc(this.db, "orden_compra", this.idOrden);
    await updateDoc(refDoc, {
      proveedor: proveedor,
      producto: producto,
      fecha: fecha,
      cantidad: cantidad,
      costoUnidad:costoUnidad,
      total: cantidad*costoUnidad,
    })
    this.mensaje = "Actualización de orden de compra"
  }
}
