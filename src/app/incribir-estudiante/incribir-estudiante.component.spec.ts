import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncribirEstudianteComponent } from './incribir-estudiante.component';

describe('IncribirEstudianteComponent', () => {
  let component: IncribirEstudianteComponent;
  let fixture: ComponentFixture<IncribirEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncribirEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncribirEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
