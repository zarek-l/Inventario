import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearOrdenComponent } from './ruta-crear-orden.component';

describe('RutaCrearOrdenComponent', () => {
  let component: RutaCrearOrdenComponent;
  let fixture: ComponentFixture<RutaCrearOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaCrearOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
