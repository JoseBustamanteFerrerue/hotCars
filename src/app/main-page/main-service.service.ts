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
    this.http.get<any>('http://localhost/rest/post.php')
      .subscribe( (resp) => {
        this.resp = resp
        console.log(this.resp)
      })
  }
}
