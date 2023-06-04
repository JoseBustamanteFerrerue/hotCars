import { Component, OnInit } from '@angular/core';
import { FavoritosServiceService } from '../favoritos-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favoritos-cuadricula',
  templateUrl: './favoritos-cuadricula.component.html',
  styleUrls: ['./favoritos-cuadricula.component.css']
})
export class FavoritosCuadriculaComponent implements OnInit{
  page = 1;
  pageSize = 9;
  pages: number[] = [];
  usuario:any;

  constructor (private favoritosService: FavoritosServiceService, private router: Router) {}

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario);
    } 
  }

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
    if (item.estadoReserva > 0) {
      return
    }
    
    this.router.navigate(['/comprar', item.id]);
  }

  deleteFavorito(item: any) {
      this.favoritosService.deleteFavorito(item)
      item.esFavorito = false;
  }
}
