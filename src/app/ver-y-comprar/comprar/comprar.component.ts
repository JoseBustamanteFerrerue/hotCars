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
  sanitizedUrl: any;
  data: Object = {};

  constructor(private route: ActivatedRoute, private verYcomprar: VerYComprarService, 
    private elementRef: ElementRef, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.verYcomprar.getCarPorId(id)
        .subscribe(resp => {
          this.car = resp;
          this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.car[0].localizacion);
          this.data = {
            item: this.car[0],
            sanitizedUrl: this.sanitizedUrl
          }
        });
    });
    
  }

  reservar (id: any) {
    this.router.navigate(['/reservar', id]);
  }
  
}
