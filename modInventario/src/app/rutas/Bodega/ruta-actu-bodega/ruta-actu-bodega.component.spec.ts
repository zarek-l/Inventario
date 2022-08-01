import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActuBodegaComponent } from './ruta-actu-bodega.component';

describe('RutaActuBodegaComponent', () => {
  let component: RutaActuBodegaComponent;
  let fixture: ComponentFixture<RutaActuBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaActuBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaActuBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
