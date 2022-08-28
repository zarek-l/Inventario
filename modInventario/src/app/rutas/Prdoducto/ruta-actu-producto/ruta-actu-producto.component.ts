import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {addDoc, collection, doc, getDoc, getFirestore, updateDoc} from "@angular/fire/firestore";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {DocumentData} from "firebase/firestore";

@Component({
  selector: 'app-ruta-actu-producto',
  templateUrl: './ruta-actu-producto.component.html',
  styleUrls: ['./ruta-actu-producto.component.scss']
})
export class RutaActuProductoComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idProducto = "";
  producto:DocumentData  = []

  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerProducto()
  }

  async obtenerProducto() {
    let docRef = doc(this.db, "productos", this.idProducto);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.producto =docSnap.data()!!
  }

  async actualizarProducto(descripcion:string, categoria:string) {
    let refDoc = doc(this.db, "productos", this.idProducto);
    await updateDoc(refDoc,{
      descripcion: descripcion,
      categoria: categoria,
    })
    this.mensaje = "Actualización de producto realizada"
  }

}
