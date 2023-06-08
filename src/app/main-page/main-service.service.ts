import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService implements OnInit{
  public resp: any[] = []
  constructor (private http: HttpClient) {this.api()}

  ngOnInit(): void {
  }
  api() {
    this.http.get<any>('http://localhost/rest/post.php?limit')
      .subscribe( (resp) => {
        this.resp = resp
        this.resp = this.resp.map( function (item: any) {
          if (item.rutas != null) {
            const rutas = item.rutas.split('|')
            item.rutas = rutas
          }
          
          return item
        })
        console.log(this.resp)
      })
  }
}
