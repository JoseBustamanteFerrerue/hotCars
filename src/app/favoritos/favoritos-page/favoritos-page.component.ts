import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos-page',
  templateUrl: './favoritos-page.component.html',
  styleUrls: ['./favoritos-page.component.css']
})
export class FavoritosPageComponent implements OnInit{
  usuario: any;

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario);
      console.log('Usuario autenticado:', this.usuario);
    } else {
      window.location.href = 'contacto'
      console.log('Usuario no autenticado');
    }
  }

}
