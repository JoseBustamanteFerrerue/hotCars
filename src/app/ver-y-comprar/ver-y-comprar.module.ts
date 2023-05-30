import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { VerComponent } from './ver/ver.component';
import { VerComprarPageComponent } from './ver-comprar-page/ver-comprar-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ReservarComponent } from './reservar/reservar.component';



@NgModule({
  declarations: [
   VerComponent,
   VerComprarPageComponent,
   ResultadosComponent,
   ComprarComponent,
   ReservarComponent
  ],
exports: [
  VerComprarPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng5SliderModule
  ]
})
export class VerYComprarModule { }
