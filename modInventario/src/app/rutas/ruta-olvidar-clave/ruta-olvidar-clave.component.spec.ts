import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaOlvidarClaveComponent } from './ruta-olvidar-clave.component';

describe('RutaOlvidarClaveComponent', () => {
  let component: RutaOlvidarClaveComponent;
  let fixture: ComponentFixture<RutaOlvidarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaOlvidarClaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaOlvidarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
