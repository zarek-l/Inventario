import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActuKardexComponent } from './ruta-actu-kardex.component';

describe('RutaActuKardexComponent', () => {
  let component: RutaActuKardexComponent;
  let fixture: ComponentFixture<RutaActuKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaActuKardexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaActuKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
