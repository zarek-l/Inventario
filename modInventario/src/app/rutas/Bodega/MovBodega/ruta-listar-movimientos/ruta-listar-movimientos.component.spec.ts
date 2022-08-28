import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarMovimientosComponent } from './ruta-listar-movimientos.component';

describe('RutaListarMovimientosComponent', () => {
  let component: RutaListarMovimientosComponent;
  let fixture: ComponentFixture<RutaListarMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarMovimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
