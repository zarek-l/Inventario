import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Gestor de productos',
    children: [{name: 'Creación de productos'}, {name: 'Listado de productos'}],
  },
  {
    name: 'Gestor de proveedores',
    children: [{name: 'Creación de proveedor'}, {name: 'Listado de proveedores'}],
  },
  {
    name: 'Gestor de ordenes de compra',
    children: [{name: 'Creación de orden'}, {name: 'Listado de ordenes'}],
  },
  {
    name: 'Gestor de bodega',
    children: [{name: 'Creación de bodega'}, {name: 'Listado de bodegas'}],
  },
  {
    name: 'Gestor de kardex',
    children: [{name: 'Creación de kardex'}, {name: 'Listado de kardex'}],
  },

];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
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
