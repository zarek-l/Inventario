import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearProveedorComponent } from './ruta-crear-proveedor.component';

describe('RutaCrearProveedorComponent', () => {
  let component: RutaCrearProveedorComponent;
  let fixture: ComponentFixture<RutaCrearProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaCrearProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
