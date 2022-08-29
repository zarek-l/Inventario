import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import {collection, getDocs, getFirestore, query, where} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-ruta-listar-movimientos',
  templateUrl: './ruta-listar-movimientos.component.html',
  styleUrls: ['./ruta-listar-movimientos.component.scss']
})
export class RutaListarMovimientosComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  movBodega: DocumentData[] = [];
  idBodega = ""
  nombreBodega = ""
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.idBodega = this.route.snapshot.paramMap.get('id')!!;
    this.nombreBodega = this.route.snapshot.paramMap.get('nombreBodega')!!;
    this.obtenerMovimientosEnBodega(this.nombreBodega)
  }

  async obtenerMovimientosEnBodega(nombreBodega:string){
    var ref = query(collection(this.db, "movimiento_bodega"));
    let nombreSnapshot = query(ref, where('bodega', '==', nombreBodega));
    const querySnapshot = await getDocs(nombreSnapshot);
    this.movBodega = querySnapshot .docs.map(doc => doc.data())
  }
}
