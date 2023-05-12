import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderPageComponent } from './vender-page.component';

describe('VenderPageComponent', () => {
  let component: VenderPageComponent;
  let fixture: ComponentFixture<VenderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
