import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenderServiceService {
  desplegableProvincias:any

  constructor(private http: HttpClient) { 
    this.getDesplegableProvincias()
  }

  getDesplegableProvincias () {
      this.http.get<any>('http://localhost/rest/post.php?desplegableProvincia')
        .subscribe( (resp) => {
          this.desplegableProvincias = resp
        })
    }
}
