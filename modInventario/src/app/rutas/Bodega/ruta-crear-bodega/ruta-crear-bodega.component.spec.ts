import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearBodegaComponent } from './ruta-crear-bodega.component';

describe('RutaCrearBodegaComponent', () => {
  let component: RutaCrearBodegaComponent;
  let fixture: ComponentFixture<RutaCrearBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaCrearBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
