import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActuCasilleroComponent } from './ruta-actu-casillero.component';

describe('RutaActuCasilleroComponent', () => {
  let component: RutaActuCasilleroComponent;
  let fixture: ComponentFixture<RutaActuCasilleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaActuCasilleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaActuCasilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
