import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosCuadriculaComponent } from './favoritos-cuadricula/favoritos-cuadricula.component';
import { FavoritosPageComponent } from './favoritos-page/favoritos-page.component';



@NgModule({
  declarations: [
    FavoritosCuadriculaComponent,
    FavoritosPageComponent
  ],
  exports: [
    FavoritosPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FavoritosModule { }
