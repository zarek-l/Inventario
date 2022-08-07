import {Component, OnInit} from '@angular/core';
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";
import {DeleteDialogComponent} from "../../../componentes/delete-dialog/delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
    private router: Router,
    public dialog: MatDialog
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

  async actualizar(i: number) {
    let ProdCol = collection(this.db, 'proveedores');
    let ProdSnapshot =  query(ProdCol);
    let ProdQuery = await getDocs(ProdSnapshot)
    let ids = ProdQuery.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actu-proveedor', { id: idActualizar }]);
  }

  async eliminar(i : number) {
    let provCol = collection(this.db, 'proveedores');
    let provSnapshot =  query(provCol);
    let provQ = await getDocs(provSnapshot)
    let ids = provQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }

  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, "proveedores", id));
    this.obtenerProveedores()
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
