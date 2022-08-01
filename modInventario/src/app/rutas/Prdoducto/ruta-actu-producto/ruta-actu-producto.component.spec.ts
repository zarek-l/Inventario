import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActuProductoComponent } from './ruta-actu-producto.component';

describe('RutaActuProductoComponent', () => {
  let component: RutaActuProductoComponent;
  let fixture: ComponentFixture<RutaActuProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaActuProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaActuProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
