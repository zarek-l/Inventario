import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";

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
    private router: Router,
    public dialog: MatDialog,
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

  async eliminar(i : number) {
    let vehCol = collection(this.db, 'orden_compra');
    let vehSnapshot =  query(vehCol);
    let vehiculoQ = await getDocs(vehSnapshot)
    let ids = vehiculoQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }

  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, "orden_compra", id));
    this.obtenerOrdenes()
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
