import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";
import {DeleteDialogComponent} from "../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.obtenerBodegas()
  }
  async obtenerBodegas(){
    this.bodegas = []
    let BodCol = collection(this.db, 'bodegas');
    let BodSnapshot =  query(BodCol);
    let BodQuery = await getDocs(BodSnapshot)
    this.bodegas = BodQuery.docs.map(doc => doc.data())
  }
  async actualizar(i: number) {
    let BodCol = collection(this.db, 'bodegas');
    let BodSnapshot =  query(BodCol);
    let BodQuery = await getDocs(BodSnapshot)
    let ids = BodQuery.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actu-bodega', { id: idActualizar }]);
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

  async listarCasillerosPorBodega(i : number){
    let BodCol = collection(this.db, 'bodegas');
    let BodSnapshot =  query(BodCol);
    let BodQuery = await getDocs(BodSnapshot)
    let ids = BodQuery.docs.map(doc => doc.id)
    let idBodega = ids[i]
    this.router.navigate(['/listar-casillero', { id: idBodega }]);
  }

}
