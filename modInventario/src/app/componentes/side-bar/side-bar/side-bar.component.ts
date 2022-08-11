import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  url: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Gestor de productos',
    children: [{name: 'Creación de productos', url:'/crear-producto'}, {name: 'Listado de productos', url:'/listar-producto'}],
    url:''
  },
  {
    name: 'Gestor de proveedores',
    children: [{name: 'Creación de proveedor', url:'/crear-proveedor'}, {name: 'Listado de proveedores', url:'/listar-proveedor'}],
    url:''
  },
  {
    name: 'Gestor de ordenes de compra',
    children: [{name: 'Creación de orden', url:'/crear-orden'}, {name: 'Listado de ordenes', url:'/listar-orden'}],
    url:''
  },
  {
    name: 'Gestor de bodega',
    children: [{name: 'Creación de bodega', url:'/crear-bodega'}, {name: 'Listado de bodegas', url:'/listar-bodega'}],
    url:''
  },
  {
    name: 'Gestor de kardex',
    children: [{name: 'Creación de movimiento', url:'/crear-kardex'}, {name: 'Listado de kardex', url:'/listar-kardex'}],
    url:''
  },

];

/** interface para los nodos del árbol */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  url:string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  ngOnInit(): void {
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url:node.url
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
