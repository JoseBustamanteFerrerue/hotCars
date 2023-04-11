import { Component, OnInit } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  page = 1;
  pageSize = 9;
  pages: number[] = [];

  ngOnInit () {
  }

  get currentItems() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.resultado.slice(start, end);
  }

  get pageCount() {
    return Math.ceil(this.resultado.length / this.pageSize);
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  get resultado () {
    return this.verYcomprar.resp
  }

  constructor (private http: HttpClient, private verYcomprar: VerYComprarService) {}
}
