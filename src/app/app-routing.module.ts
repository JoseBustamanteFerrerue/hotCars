import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { VerComprarPageComponent } from './ver-y-comprar/ver-comprar-page/ver-comprar-page.component';
import { VenderComponent } from './vender/vender.component';

const routes: Routes = [
  {
  path: '',
  component: MainPageComponent,
  pathMatch: 'full'
  },
  {
    path: 'ver',
    component: VerComprarPageComponent,
  }, 
  {
    path: 'verYcomprar',
    component: VerComprarPageComponent,
  },
  {
    path: 'vender',
    component: VenderComponent,
  },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
