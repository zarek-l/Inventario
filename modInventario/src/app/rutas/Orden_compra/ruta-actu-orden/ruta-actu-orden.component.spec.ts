import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActuOrdenComponent } from './ruta-actu-orden.component';

describe('RutaActuOrdenComponent', () => {
  let component: RutaActuOrdenComponent;
  let fixture: ComponentFixture<RutaActuOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaActuOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaActuOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
