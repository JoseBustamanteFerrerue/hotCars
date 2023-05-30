import { Component, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerYComprarService } from '../ver-y-comprar.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {
  car: any;
  entradaInicial: any;
  plazo: number = 120;
  cuota: any;
  sanitizedUrl: any;

  constructor(private route: ActivatedRoute, private verYcomprar: VerYComprarService, 
    private elementRef: ElementRef, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.verYcomprar.getCarPorId(id)
        .subscribe(resp => {
          this.car = resp;
          this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.car[0].localizacion);
        });
    });
    
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

  scrollToSection() {
    const section = this.elementRef.nativeElement.querySelector('#seccionCuota');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  reservar (id: any) {
    this.router.navigate(['/reservar', id]);
  }

  pedirCita () {
    window.location.href = 'contacto'
  }
  
}
