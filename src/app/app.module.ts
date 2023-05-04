import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { Ng5SliderModule } from 'ng5-slider';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { SharedModule } from './shared/shared.module';
import { VerYComprarModule } from './ver-y-comprar/ver-y-comprar.module';
import { VenderComponent } from './vender/vender.component';

registerLocaleData (localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    VenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    SharedModule,
    HttpClientModule,
    VerYComprarModule,
    FormsModule,
    Ng5SliderModule   
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
