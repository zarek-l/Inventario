import { Component, OnInit } from '@angular/core';
import {addDoc, collection, getFirestore} from "@angular/fire/firestore";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-casillero',
  templateUrl: './ruta-crear-casillero.component.html',
  styleUrls: ['./ruta-crear-casillero.component.scss']
})
export class RutaCrearCasilleroComponent implements OnInit {

  app = initializeApp(environment.firebase);
  db = getFirestore();
  mensaje: string  ="";
  idBodega = ""

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idBodega = this.route.snapshot.paramMap.get('id')!!;
  }

  async crearCasillero(nombre_casillero:string, capacidad:string) {
    let docRef = await addDoc(collection(this.db, "bodegas",this.idBodega,"casilleros"), {
      nombre_casillero: nombre_casillero,
      capacidad: capacidad
    });
    this.mensaje = "Casillero registrado"
    this.router.navigate(['/listar-bodega'])
  }

}
