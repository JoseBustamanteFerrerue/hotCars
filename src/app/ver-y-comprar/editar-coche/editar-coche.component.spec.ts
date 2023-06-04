import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCocheComponent } from './editar-coche.component';

describe('EditarCocheComponent', () => {
  let component: EditarCocheComponent;
  let fixture: ComponentFixture<EditarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
