import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarProductosComponent } from './ruta-listar-productos.component';

describe('RutaListarProductosComponent', () => {
  let component: RutaListarProductosComponent;
  let fixture: ComponentFixture<RutaListarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
