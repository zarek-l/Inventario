import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import {collection, deleteDoc, doc, getDocs, getFirestore, query, where} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";

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

  async eliminar(i : number) {
    let CasCol = collection(this.db, 'movimiento_bodega');
    let CasSnapshot =  query(CasCol);
    let CasQ = await getDocs(CasSnapshot)
    let ids = CasQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }

  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, 'movimiento_bodega'));
    this.obtenerMovimientosEnBodega(this.nombreBodega)
  }

}
