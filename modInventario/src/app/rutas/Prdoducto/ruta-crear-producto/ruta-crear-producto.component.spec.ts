import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearProductoComponent } from './ruta-crear-producto.component';

describe('RutaCrearProductoComponent', () => {
  let component: RutaCrearProductoComponent;
  let fixture: ComponentFixture<RutaCrearProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaCrearProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
