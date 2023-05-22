import { Component } from '@angular/core';
import { FavoritosServiceService } from '../favoritos-service.service';


@Component({
  selector: 'app-favoritos-cuadricula',
  templateUrl: './favoritos-cuadricula.component.html',
  styleUrls: ['./favoritos-cuadricula.component.css']
})
export class FavoritosCuadriculaComponent {
  page = 1;
  pageSize = 9;
  pages: number[] = [];

  constructor (private favoritosService: FavoritosServiceService) {}

  get currentItems() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.resultado.slice(start, end);
  }

  get pageCount() {
    return Math.ceil(this.resultado.length / this.pageSize);
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  get resultado () {
    return this.favoritosService.resp
  }
  // Cambiar a ver página del coche elegido
  cambiarAcocheSeleccionado(item: any) {
    window.location.href = 'verYcomprar:item.id'
  }
}
