import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialTelaUserComponent } from './initial-tela-user.component';

describe('InitialTelaUserComponent', () => {
  let component: InitialTelaUserComponent;
  let fixture: ComponentFixture<InitialTelaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialTelaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialTelaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
