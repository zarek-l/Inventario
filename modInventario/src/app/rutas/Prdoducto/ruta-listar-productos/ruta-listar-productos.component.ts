import {Component, OnInit} from '@angular/core';
import {collection, deleteDoc, doc, getDocs, getFirestore, query} from "@angular/fire/firestore";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {DocumentData} from "firebase/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-listar-productos',
  templateUrl: './ruta-listar-productos.component.html',
  styleUrls: ['./ruta-listar-productos.component.scss']
})
export class RutaListarProductosComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  productos: DocumentData[] = [];
  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    this.obtenerProductos()
  }

  async obtenerProductos(){
    this.productos = []
    let ProdCol = collection(this.db, 'productos');
    let ProdSnapshot =  query(ProdCol);
    let ProdQuery = await getDocs(ProdSnapshot)
    this.productos = ProdQuery.docs.map(doc => doc.data())
  }

  async actualizar(i: number) {
    let ProdCol = collection(this.db, 'productos');
    let ProdSnapshot =  query(ProdCol);
    let ProdQuery = await getDocs(ProdSnapshot)
    let ids = ProdQuery.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actu-producto', { id: idActualizar }]);
  }

  async eliminar(i : number) {
    let vehCol = collection(this.db, 'productos');
    let vehSnapshot =  query(vehCol);
    let vehiculoQ = await getDocs(vehSnapshot)
    let ids = vehiculoQ.docs.map(doc => doc.id)
    let idEliminar = ids[i]
    this.eliminarDoc(idEliminar)
  }
  
  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, "productos", id));
    this.obtenerProductos()
  }

}
