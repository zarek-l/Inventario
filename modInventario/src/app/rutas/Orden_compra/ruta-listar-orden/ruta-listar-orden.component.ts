import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-listar-orden',
  templateUrl: './ruta-listar-orden.component.html',
  styleUrls: ['./ruta-listar-orden.component.scss']
})

export class RutaListarOrdenComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  ordenes: DocumentData[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerOrdenes()
  }
  async obtenerOrdenes(){
    this.ordenes = []
    let OrdCol = collection(this.db, 'orden_compra');
    let OrdSnapshot =  query(OrdCol);
    let OrdQuery = await getDocs(OrdSnapshot)
    this.ordenes = OrdQuery.docs.map(doc => doc.data())
  }

  async actualizar(i: number) {
    let ProdCol = collection(this.db, 'orden_compra');
    let ProdSnapshot =  query(ProdCol);
    let ProdQuery = await getDocs(ProdSnapshot)
    let ids = ProdQuery.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actu-orden', { id: idActualizar }]);
  }

}
