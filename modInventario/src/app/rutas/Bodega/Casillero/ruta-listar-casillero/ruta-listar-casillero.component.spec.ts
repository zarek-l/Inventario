import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarCasilleroComponent } from './ruta-listar-casillero.component';

describe('RutaListarCasilleroComponent', () => {
  let component: RutaListarCasilleroComponent;
  let fixture: ComponentFixture<RutaListarCasilleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarCasilleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarCasilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
