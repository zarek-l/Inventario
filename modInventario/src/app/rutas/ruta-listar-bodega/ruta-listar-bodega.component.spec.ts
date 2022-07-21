import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarBodegaComponent } from './ruta-listar-bodega.component';

describe('RutaListarBodegaComponent', () => {
  let component: RutaListarBodegaComponent;
  let fixture: ComponentFixture<RutaListarBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
