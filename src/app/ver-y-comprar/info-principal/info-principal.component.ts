import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-principal',
  templateUrl: './info-principal.component.html',
  styleUrls: ['./info-principal.component.css']
})
export class InfoPrincipalComponent {
  @Input() item: any;
  entradaInicial: any;
  plazo: number = 120;
  cuota: any;

  constructor(private elementRef: ElementRef,  private router: Router) {}
  
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

  scrollToSection() {
    const section = this.elementRef.nativeElement.querySelector('#seccionCuota');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  reservar (id: any) {
    this.router.navigate(['/reservar', id]);
  }
}
