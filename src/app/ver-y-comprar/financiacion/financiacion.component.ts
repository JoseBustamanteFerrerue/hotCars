import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-financiacion',
  templateUrl: './financiacion.component.html',
  styleUrls: ['./financiacion.component.css']
})
export class FinanciacionComponent {
  @Input() item: any;
  entradaInicial: any;
  plazo: number = 120;
  cuota: any;

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
