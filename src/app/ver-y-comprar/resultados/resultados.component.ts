import { Component, OnInit } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  page = 1;
  pageSize = 9;
  pages: number[] = [];
  isStarred: boolean = false;
  favoritos: any;
  entradaInicial: any;
  plazo: number = 120;
  cuota: any;
  selectedItem: number | null = null;

  constructor (private verYcomprar: VerYComprarService, private router: Router) {}

  ngOnInit () {
    this.esFavorito()
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
  // Cambiar a ver página del coche elegido
  cambiarAcocheSeleccionado(item: any) {
    if (item.estadoReserva > 0) {
      return
    }
    this.router.navigate(['/comprar', item.id]);
  }

  anyadirFavorito(item: any) {
    let yaExiste = false
    for (const it of item.idCar) {
        if (it.idCar == item.id) {
          yaExiste = true;
        }
    }

    if (yaExiste) {
      this.verYcomprar.deleteFavorito(item)
      item.esFavorito = false;
    } else {
      this.verYcomprar.anyadirFavorito(item)
      item.esFavorito = true
    } 
  }

  esFavorito () {

  }

  calcularCuota(item: any, plazo: any): number {
    const interestRate = 0.08 / 12;
    const numPayments = plazo;
    const principal = item;
    if (this.entradaInicial) {
      let principalConEntrada = principal - this.entradaInicial;

      const cuota = (principalConEntrada * interestRate * Math.pow(1 + interestRate, numPayments)) /
                  (Math.pow(1 + interestRate, numPayments) - 1);
      this.cuota = cuota
      return cuota;
    }

    const cuota = (principal * interestRate * Math.pow(1 + interestRate, numPayments)) /
                  (Math.pow(1 + interestRate, numPayments) - 1);
    this.cuota = cuota
    return cuota;
  } 
}
