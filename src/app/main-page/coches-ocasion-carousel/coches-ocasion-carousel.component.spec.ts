import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesOcasionCarouselComponent } from './coches-ocasion-carousel.component';

describe('CochesOcasionCarouselComponent', () => {
  let component: CochesOcasionCarouselComponent;
  let fixture: ComponentFixture<CochesOcasionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesOcasionCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CochesOcasionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
