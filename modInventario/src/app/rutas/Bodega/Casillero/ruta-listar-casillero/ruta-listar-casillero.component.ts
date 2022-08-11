import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../../environments/environment";
import {collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";

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
    let CasCol = collection(this.db, 'bodegas',this.idBodega,'casilleros');
    let CasSnapshot =  query(CasCol);
    let CasQ = await getDocs(CasSnapshot)
    let ids = CasQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }

  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, 'bodegas',this.idBodega,'casilleros', id));
    this.obtenerCasilleros()
  }

  async actualizar(i: number) {
    let CasCol = collection(this.db, 'bodegas',this.idBodega,'casilleros');
    let CasSnapshot =  query(CasCol);
    let CasQuery = await getDocs(CasSnapshot)
    let ids = CasQuery.docs.map(doc => doc.id)
    let idCasillero = ids[i]
    this.router.navigate(['/actu-casillero',{ idC: idCasillero, idB: this.idBodega }]);
  }

}
