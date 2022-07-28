import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarOrdenComponent } from './ruta-listar-orden.component';

describe('RutaListarOrdenComponent', () => {
  let component: RutaListarOrdenComponent;
  let fixture: ComponentFixture<RutaListarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
