import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosCuadriculaComponent } from './favoritos-cuadricula.component';

describe('FavoritosCuadriculaComponent', () => {
  let component: FavoritosCuadriculaComponent;
  let fixture: ComponentFixture<FavoritosCuadriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosCuadriculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosCuadriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
