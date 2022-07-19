import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  formGroup = this.fb.group({
    userEmail: new FormControl('',[
      Validators.required
    ]),
    userPass: new FormControl('',[
      Validators.required
    ])
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
