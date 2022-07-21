import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearKardexComponent } from './ruta-crear-kardex.component';

describe('RutaCrearKardexComponent', () => {
  let component: RutaCrearKardexComponent;
  let fixture: ComponentFixture<RutaCrearKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearKardexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaCrearKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
