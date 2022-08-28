import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import { collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";
import {DeleteDialogComponent} from "../../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";
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
  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  async obtenerBodegas(){
    this.movBodega = []
    let BodCol = collection(this.db, 'bodegas');
    let BodSnapshot =  query(BodCol);
    let BodQuery = await getDocs(BodSnapshot)
    this.movBodega = BodQuery.docs.map(doc => doc.data())
  }

  async eliminar(i : number) {
    let BodCol = collection(this.db, 'bodegas');
    let BodSnapshot =  query(BodCol);
    let BodQ = await getDocs(BodSnapshot)
    let ids = BodQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }

  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, "bodegas", id));
    this.obtenerBodegas()
  }

  abrirDialogoEliminar(posicion:number): void {
    const referenciaDialogo = this.dialog.open(
      DeleteDialogComponent,{
        disableClose : true,
        data:{
          posicion
        }
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe(
        (datos) => {
          if(datos.estado == 'true'){
            this.eliminar(posicion)
          }
          else{
            console.log('accion cancelada')
          }
        }
      )
  }
}
