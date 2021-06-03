import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTelaUserComponent } from './perfil-tela-user.component';

describe('PerfilTelaUserComponent', () => {
  let component: PerfilTelaUserComponent;
  let fixture: ComponentFixture<PerfilTelaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilTelaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilTelaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
