import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoCompraYlugarComponent } from './proceso-compra-ylugar.component';

describe('ProcesoCompraYlugarComponent', () => {
  let component: ProcesoCompraYlugarComponent;
  let fixture: ComponentFixture<ProcesoCompraYlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoCompraYlugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoCompraYlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
