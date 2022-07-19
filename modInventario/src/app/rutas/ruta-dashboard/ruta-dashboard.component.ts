import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-ruta-dashboard',
  templateUrl: './ruta-dashboard.component.html',
  styleUrls: ['./ruta-dashboard.component.scss']
})
export class RutaDashboardComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
