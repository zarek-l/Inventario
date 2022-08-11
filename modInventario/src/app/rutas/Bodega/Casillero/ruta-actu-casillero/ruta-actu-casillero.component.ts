import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import {doc, getDoc, getFirestore, updateDoc} from "@angular/fire/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentData} from "firebase/firestore";

@Component({
  selector: 'app-ruta-actu-casillero',
  templateUrl: './ruta-actu-casillero.component.html',
  styleUrls: ['./ruta-actu-casillero.component.scss']
})
export class RutaActuCasilleroComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idCasillero = "";
  idBodega = "";
  casillero:DocumentData  = []

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idBodega = this.route.snapshot.paramMap.get('idB')!!;
    this.idCasillero = this.route.snapshot.paramMap.get('idC')!!;
    this.obtenerCasillero()
  }

  async obtenerCasillero() {
    let docRef = doc(this.db,"bodegas",this.idBodega, "casilleros", this.idCasillero);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.casillero =docSnap.data()!!
    console.log(this.casillero)
  }

  async actualizarCasillero(nombre_casillero:string, capacidad:string) {
    let refDoc = doc(this.db,"bodegas",this.idBodega, "casilleros", this.idCasillero);
    await updateDoc(refDoc,{
      nombre_casillero: nombre_casillero,
      capacidad: capacidad
    })
    this.mensaje = "Actualización de casillero realizada"
  }
}
