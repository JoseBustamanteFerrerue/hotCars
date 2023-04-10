import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VerComponent } from './ver/ver.component';
import { VerComprarPageComponent } from './ver-comprar-page/ver-comprar-page.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
   VerComponent,
   VerComprarPageComponent,
   ResultadosComponent
  ],
exports: [
  VerComprarPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VerYComprarModule { }
