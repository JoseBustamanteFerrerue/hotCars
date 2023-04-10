import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  nuevo = {
    carName: '',
    nameModel: ''
  }

  constructor (private http: HttpClient) {}
  ngOnInit() {
  }

  conseguir () {
    let consulta = ''
    if (this.nuevo.carName !== '') {
      consulta += 'carName=' + this.nuevo.carName + '&&'
    }

    if (this.nuevo.nameModel !== '') {
      consulta += 'nameModel=' +this.nuevo.nameModel + '&&'
    }

    this.http.get<any>('http://localhost/rest/post.php?' + consulta)
      .subscribe( (resp) => {
        console.log(resp)
      })
  }
}

