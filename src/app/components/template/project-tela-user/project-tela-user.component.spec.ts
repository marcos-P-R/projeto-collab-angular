import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTelaUserComponent } from './project-tela-user.component';

describe('ProjectTelaUserComponent', () => {
  let component: ProjectTelaUserComponent;
  let fixture: ComponentFixture<ProjectTelaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTelaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTelaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
