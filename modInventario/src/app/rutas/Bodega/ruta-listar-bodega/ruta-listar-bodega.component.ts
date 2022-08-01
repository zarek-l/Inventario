import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";

@Component({
  selector: 'app-ruta-listar-bodega',
  templateUrl: './ruta-listar-bodega.component.html',
  styleUrls: ['./ruta-listar-bodega.component.scss']
})
export class RutaListarBodegaComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  bodegas: DocumentData[] = [];
  constructor() { }

  ngOnInit(): void {
    this.obtenerOrdenes()
  }
  async obtenerOrdenes(){
    this.bodegas = []
    let BodCol = collection(this.db, 'bodegas');
    let BodSnapshot =  query(BodCol);
    let BodQuery = await getDocs(BodSnapshot)
    this.bodegas = BodQuery.docs.map(doc => doc.data())
  }

}
