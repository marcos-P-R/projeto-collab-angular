import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTelaUserComponent } from './creation-tela-user.component';

describe('CreationTelaUserComponent', () => {
  let component: CreationTelaUserComponent;
  let fixture: ComponentFixture<CreationTelaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTelaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTelaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
