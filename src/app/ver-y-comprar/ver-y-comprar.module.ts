import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { VerComponent } from './ver/ver.component';
import { VerComprarPageComponent } from './ver-comprar-page/ver-comprar-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ReservarComponent } from './reservar/reservar.component';
import { InfoPrincipalComponent } from './info-principal/info-principal.component';
import { DatosBasicosComponent } from './datos-basicos/datos-basicos.component';
import { ProcesoCompraYlugarComponent } from './proceso-compra-ylugar/proceso-compra-ylugar.component';
import { FinanciacionComponent } from './financiacion/financiacion.component';
import { EditarCocheComponent } from './editar-coche/editar-coche.component';
import { ReservasComponent } from './reservas/reservas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './reservas/filter.pipe';
import { NuevoCocheComponent } from './nuevo-coche/nuevo-coche.component';

@NgModule({
  declarations: [
   VerComponent,
   VerComprarPageComponent,
   ResultadosComponent,
   ComprarComponent,
   ReservarComponent,
   InfoPrincipalComponent,
   DatosBasicosComponent,
   ProcesoCompraYlugarComponent,
   FinanciacionComponent,
   EditarCocheComponent,
   ReservasComponent,
   FilterPipe,
   NuevoCocheComponent
  ],
  exports: [
  VerComprarPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class VerYComprarModule { }
