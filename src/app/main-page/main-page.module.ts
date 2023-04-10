import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CochesAelegirComponent } from './coches-aelegir/coches-aelegir.component';
import { InfoComponent } from './info/info.component';
import { CochesOcasionCarouselComponent } from './coches-ocasion-carousel/coches-ocasion-carousel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    CochesAelegirComponent,
    InfoComponent,
    CochesOcasionCarouselComponent
  ],
  exports: [
    MainPageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MainPageModule { }
