import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {doc, getDoc, getFirestore, updateDoc} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-actu-proveedor',
  templateUrl: './ruta-actu-proveedor.component.html',
  styleUrls: ['./ruta-actu-proveedor.component.scss']
})
export class RutaActuProveedorComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idProveedor = "";
  proveedor:DocumentData  = []

  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idProveedor = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerProveedor()
  }

  async obtenerProveedor() {
    let docRef = doc(this.db, "proveedores", this.idProveedor);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.proveedor =docSnap.data()!!
  }

  async actualizarProveedor(ruc:string, razon_social:string, correo:string, telefono:string, categoria:string) {
    let refDoc = doc(this.db, "proveedores", this.idProveedor);
    await updateDoc(refDoc,{
      ruc: ruc,
      razon_social: razon_social,
      correo: correo,
      telefono:telefono,
      categoria:categoria,
    })
    this.mensaje = "Actualización de proveedor realizada"
  }
}
