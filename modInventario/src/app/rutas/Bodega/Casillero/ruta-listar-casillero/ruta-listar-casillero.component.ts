import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import {collection, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-ruta-listar-casillero',
  templateUrl: './ruta-listar-casillero.component.html',
  styleUrls: ['./ruta-listar-casillero.component.scss']
})
export class RutaListarCasilleroComponent implements OnInit {

  app = initializeApp(environment.firebase);
  db = getFirestore();
  idBodega = ""
  casilleros: DocumentData[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.idBodega = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerCasilleros();
  }

  async obtenerCasilleros(){
    this.casilleros = []
    let BodCol = collection(this.db, 'bodegas',this.idBodega,'casilleros');
    let BodSnapshot =  query(BodCol);
    let BodQuery = await getDocs(BodSnapshot)
    this.casilleros = BodQuery.docs.map(doc => doc.data())
  }

  async AgregarCasillerosPorBodega(){
    this.router.navigate(['/crear-casillero', { id: this.idBodega }]);
  }

}
