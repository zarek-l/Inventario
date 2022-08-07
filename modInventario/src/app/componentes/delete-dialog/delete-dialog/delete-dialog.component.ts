import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {collection, deleteDoc, doc, getDocs, query} from "@angular/fire/firestore";


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close({estado: 'false'});
  }

  cerrarDialogo(){
    this.dialogRef.close({estado: 'true'})
  }



}
