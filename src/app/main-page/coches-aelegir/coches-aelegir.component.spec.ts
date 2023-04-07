import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesAelegirComponent } from './coches-aelegir.component';

describe('CochesAelegirComponent', () => {
  let component: CochesAelegirComponent;
  let fixture: ComponentFixture<CochesAelegirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesAelegirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CochesAelegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
