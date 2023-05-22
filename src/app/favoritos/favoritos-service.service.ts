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
    this.http.get<any>('http://localhost/rest/post.php?favoritosAndCars=1')
      .subscribe( (resp) => {
        this.resp = resp
      })
  }
}
