import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-coches-ocasion-carousel',
  templateUrl: './coches-ocasion-carousel.component.html',
  styleUrls: ['./coches-ocasion-carousel.component.css']
})
export class CochesOcasionCarouselComponent {
  entradaInicial: any;
  plazo: number = 120;
  cuota: any;
  
  get resultados () {
    return this.mainService.resp
  }
  constructor ( private mainService: MainServiceService ) {}

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

  cochePulsado(id: any) {
    window.location.href = 'coche/' + id
  }
}
