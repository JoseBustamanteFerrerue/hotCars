import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FavoritosServiceService {
  public resp: any[] = []
  constructor(private http: HttpClient) {
    this.getFavoritos()
   }
   // MODIFICAR PARA CUANDO SE INICIE SESION
   getFavoritos():any {
    const usuarioString = localStorage.getItem('usuario');
    const usuarioObject = JSON.parse(usuarioString!);
    const idUsuario = usuarioObject.id
    this.http.get<any>('http://localhost/rest/post.php?favoritosAndCars=' + idUsuario)
      .subscribe( (resp) => {
        this.resp = resp
        console.log(resp)
        this.resp = this.resp.map( function (item) {
          item.esFavorito = true;
          return item
        })
      })
  }

  deleteFavorito (item: any) {
    const usuarioString = localStorage.getItem('usuario');
    let usuario: any;
    if (usuarioString) {
      usuario = JSON.parse(usuarioString);
    }
    console.log(usuario.id + ' ' + item.id)
    
    this.http.delete<any>('http://localhost/rest/post.php?favorito&&idUser=' + usuario.id + '&&idCar=' + item.id).subscribe(
      response => {
        this.getFavoritos()
        return 1     
        
      },
      error => {
        Swal.fire({
          title: 'Algo malo ha ocurrido',
          text: 'En su consulta ha habido un error, por favor inténtelo más tarde.',
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
          allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(error)
          }
          return 0
        });
      })
  }

}
