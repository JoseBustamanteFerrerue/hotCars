import { Component } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  get resultados () {
    return this.verYcomprar.resp
  }

  constructor (private http: HttpClient, private verYcomprar: VerYComprarService) {}
}
