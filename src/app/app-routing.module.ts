import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { VerComprarPageComponent } from './ver-y-comprar/ver-comprar-page/ver-comprar-page.component';
import { VenderPageComponent } from './vender/vender-page/vender-page.component';
import { FavoritosPageComponent } from './favoritos/favoritos-page/favoritos-page.component';
import { ContactoPageComponent } from './contacto/contacto-page/contacto-page.component';
import { ComprarComponent } from './ver-y-comprar/comprar/comprar.component';
import { ReservarComponent } from './ver-y-comprar/reservar/reservar.component';
import { EditarCocheComponent } from './ver-y-comprar/editar-coche/editar-coche.component';
import { ReservasComponent } from './ver-y-comprar/reservas/reservas.component';
import { NuevoCocheComponent } from './ver-y-comprar/nuevo-coche/nuevo-coche.component';


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
    component: VenderPageComponent,
  },
  {
    path: 'contacto',
    component: ContactoPageComponent,
  },  
  {
    path: 'favoritos',
    component: FavoritosPageComponent,
  }, 
  {
    path: 'comprar/:id',
    component: ComprarComponent,
  },
  {
    path: 'reservar/:id',
    component: ReservarComponent,
  },   
  {
    path: 'editarCoche/:id',
    component: EditarCocheComponent,
  },     
  {
    path: 'reservas',
    component: ReservasComponent,
  },
  {
    path: 'nuevoCoche',
    component: NuevoCocheComponent,
  },       

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
