import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  public resp: any[] = []
  constructor(private http: HttpClient) {
    this.getConcesionarios()
   }

  getConcesionarios():any {
    this.http.get<any>('http://localhost/rest/post.php?concesionarios')
      .subscribe( (resp) => {
        this.resp = resp
      })
  }
}
