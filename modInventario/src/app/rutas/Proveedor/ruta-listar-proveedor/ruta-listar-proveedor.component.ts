import {Component, OnInit} from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";

@Component({
  selector: 'app-ruta-listar-proveedor',
  templateUrl: './ruta-listar-proveedor.component.html',
  styleUrls: ['./ruta-listar-proveedor.component.scss']
})
export class RutaListarProveedorComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  proveedores: DocumentData[] = [];
  constructor(
  ) { }

  ngOnInit(): void {
    this.obtenerProveedores()
  }
  async obtenerProveedores(){
    this.proveedores = []
    let ProvCol = collection(this.db, 'proveedores');
    let ProvSnapshot =  query(ProvCol);
    let ProvQuery = await getDocs(ProvSnapshot)
    this.proveedores = ProvQuery.docs.map(doc => doc.data())
  }

}
