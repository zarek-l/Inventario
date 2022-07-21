import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarKardexComponent } from './ruta-listar-kardex.component';

describe('RutaListarKardexComponent', () => {
  let component: RutaListarKardexComponent;
  let fixture: ComponentFixture<RutaListarKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarKardexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaListarKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
