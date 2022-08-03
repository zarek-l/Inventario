import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-listar-bodega',
  templateUrl: './ruta-listar-bodega.component.html',
  styleUrls: ['./ruta-listar-bodega.component.scss']
})
export class RutaListarBodegaComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  bodegas: DocumentData[] = [];
  constructor(
    private router: Router
  ) { }

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
  async actualizar(i: number) {
    let ProdCol = collection(this.db, 'bodegas');
    let ProdSnapshot =  query(ProdCol);
    let ProdQuery = await getDocs(ProdSnapshot)
    let ids = ProdQuery.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actu-bodega', { id: idActualizar }]);
  }
}
