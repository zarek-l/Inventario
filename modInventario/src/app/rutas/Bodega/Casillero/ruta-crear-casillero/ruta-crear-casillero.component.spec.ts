import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearCasilleroComponent } from './ruta-crear-casillero.component';

describe('RutaCrearCasilleroComponent', () => {
  let component: RutaCrearCasilleroComponent;
  let fixture: ComponentFixture<RutaCrearCasilleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearCasilleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaCrearCasilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
