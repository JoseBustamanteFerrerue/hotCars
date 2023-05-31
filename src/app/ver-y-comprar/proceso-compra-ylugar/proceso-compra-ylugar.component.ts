import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-proceso-compra-ylugar',
  templateUrl: './proceso-compra-ylugar.component.html',
  styleUrls: ['./proceso-compra-ylugar.component.css']
})
export class ProcesoCompraYlugarComponent {
  @Input() item: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  pedirCita () {
    window.location.href = 'contacto'
  }
}
