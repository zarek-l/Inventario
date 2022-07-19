import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVerificarEmailComponent } from './ruta-verificar-email.component';

describe('RutaVerificarEmailComponent', () => {
  let component: RutaVerificarEmailComponent;
  let fixture: ComponentFixture<RutaVerificarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaVerificarEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaVerificarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
