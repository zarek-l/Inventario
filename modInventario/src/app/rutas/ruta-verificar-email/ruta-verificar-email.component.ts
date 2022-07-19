import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-ruta-verificar-email',
  templateUrl: './ruta-verificar-email.component.html',
  styleUrls: ['./ruta-verificar-email.component.scss']
})
export class RutaVerificarEmailComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
