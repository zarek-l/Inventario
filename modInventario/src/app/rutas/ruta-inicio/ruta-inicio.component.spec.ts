import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInicioComponent } from './ruta-inicio.component';

describe('RutaInicioComponent', () => {
  let component: RutaInicioComponent;
  let fixture: ComponentFixture<RutaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
