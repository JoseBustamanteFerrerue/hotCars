import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCocheComponent } from './nuevo-coche.component';

describe('NuevoCocheComponent', () => {
  let component: NuevoCocheComponent;
  let fixture: ComponentFixture<NuevoCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
