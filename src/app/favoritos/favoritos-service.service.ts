import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      })
  }
}
