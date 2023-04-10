import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComprarPageComponent } from './ver-comprar-page.component';

describe('VerComprarPageComponent', () => {
  let component: VerComprarPageComponent;
  let fixture: ComponentFixture<VerComprarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerComprarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerComprarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
