import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SideBarComponent,
  ],
  exports: [
    SideBarComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatTreeModule,
        MatIconModule,
        RouterModule,
    ]
})
export class SideBarModule { }
