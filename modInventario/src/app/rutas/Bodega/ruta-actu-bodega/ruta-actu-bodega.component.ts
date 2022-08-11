import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import { doc, getDoc, getFirestore, updateDoc} from "@angular/fire/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentData} from "firebase/firestore";

@Component({
  selector: 'app-ruta-actu-bodega',
  templateUrl: './ruta-actu-bodega.component.html',
  styleUrls: ['./ruta-actu-bodega.component.scss']
})
export class RutaActuBodegaComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idBodega = ""
  bodega:DocumentData  = []

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idBodega = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerBodega()
  }

  async obtenerBodega() {
    let docRef = doc(this.db, "bodegas", this.idBodega);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.bodega =docSnap.data()!!
  }

  async actualizarBodega(nombre_bodega:string, direccion:string) {
    let refDoc = doc(this.db, "bodegas", this.idBodega);
    await updateDoc(refDoc,{
      nombre_bodega: nombre_bodega,
      direccion: direccion
    })
    this.mensaje = "Actualización de bodega realizada"
  }
}
