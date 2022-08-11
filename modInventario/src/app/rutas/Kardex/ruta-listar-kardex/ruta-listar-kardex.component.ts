import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-ruta-listar-kardex',
  templateUrl: './ruta-listar-kardex.component.html',
  styleUrls: ['./ruta-listar-kardex.component.scss']
})
export class RutaListarKardexComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  movimientos: DocumentData[] = [];
  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.obtenerMovimientos()
  }
  async obtenerMovimientos(){
    this.movimientos = []
    let MovCol = collection(this.db, 'movimientos');
    let MovSnapshot =  query(MovCol);
    let MovQuery = await getDocs(MovSnapshot)
    this.movimientos = MovQuery.docs.map(doc => doc.data())
  }

  async actualizar(i: number) {
    let MovCol = collection(this.db, 'movimientos');
    let MovSnapshot =  query(MovCol);
    let MovQuery = await getDocs(MovSnapshot)
    let ids = MovQuery.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actu-kardex', { id: idActualizar }]);
  }

  async eliminar(i : number) {
    let MovCol = collection(this.db, 'movimientos');
    let MovSnapshot =  query(MovCol);
    let MovQ = await getDocs(MovSnapshot)
    let ids = MovQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }

  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, "movimientos", id));
    this.obtenerMovimientos()
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
