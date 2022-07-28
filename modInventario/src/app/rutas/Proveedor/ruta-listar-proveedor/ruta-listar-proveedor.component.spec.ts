import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarProveedorComponent } from './ruta-listar-proveedor.component';

describe('RutaListarProveedorComponent', () => {
  let component: RutaListarProveedorComponent;
  let fixture: ComponentFixture<RutaListarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
