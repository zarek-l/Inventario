import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActuProveedorComponent } from './ruta-actu-proveedor.component';

describe('RutaActuProveedorComponent', () => {
  let component: RutaActuProveedorComponent;
  let fixture: ComponentFixture<RutaActuProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaActuProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaActuProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
