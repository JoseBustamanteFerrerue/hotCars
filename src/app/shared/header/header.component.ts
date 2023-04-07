import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  textoCambiado: string = ''

  ngOnInit() {
    this.cambioTexto()
  }

  cambioTexto() {
    let textos = ['Vende tu coche con la máxima tasación', '30 centros en España', 'Coches revisados por expertos certificados', 'Financiación al 100% y a tu medida'];
    let i = 0
    this.textoCambiado = textos[i]
    setInterval(() => {     
      if (i >= textos.length - 1) {
          i = 0
      }
      i++
      this.textoCambiado = textos[i]
    }, 5000);   
  }
}
