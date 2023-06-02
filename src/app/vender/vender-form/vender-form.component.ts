import { Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { VenderServiceService } from '../vender.service.service';
@Component({
  selector: 'app-vender-form',
  templateUrl: './vender-form.component.html',
  styleUrls: ['./vender-form.component.css']
})
export class VenderFormComponent implements OnInit{
  myForm!: FormGroup;
  myForm2!: FormGroup;
  myForm3!: FormGroup;
  mostrarForms: number = 1;
  progress = 33;
  type = 'success';
  valorCoche: any;
  nameMarkValor: any
  nameModelValor: any
  nameVersionValor: any
  provinciaValor: any
  anyosDesplegable: any

  constructor (private elementRef: ElementRef, private formBuilder: FormBuilder, private venderService: VenderServiceService) {}

  ngOnInit() {
    this.generarNumeros()

    this.myForm = this.formBuilder.group({
      matricula: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{4}[A-Z]{3}$')]],
      kilometros: ['', [Validators.required]],
      anyoMatriculacion: ['', [Validators.required]],
      siniestroTotal: ['', [Validators.required]],
    });

    this.myForm2 = this.formBuilder.group({
      name: ['', [Validators.required, this.sinSignosValidator, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      primerApellido: ['', [Validators.required, this.sinSignosValidator, Validators.minLength(4)]],
      fecha_nacimiento: ['', [Validators.required]],
      provincia: ['', [Validators.required]]
    });

    this.myForm3 = this.formBuilder.group({
      nameMark: ['', [Validators.required]],
      nameModel: ['', [Validators.required]],
      nameVersion: ['', [Validators.required]],
      estadoCoche: ['', [Validators.required]],
    });
  }

  enviarDatosForm() {
    this.nameMarkValor      = this.myForm3.get('nameMark')!.value
    this.nameModelValor     = this.myForm3.get('nameModel')!.value
    this.nameVersionValor   = this.myForm3.get('nameVersion')!.value
    this.provinciaValor     = this.myForm2.get('provincia')!.value

    this.venderService.marcaId(this.nameMarkValor, this.nameModelValor, this.nameVersionValor).subscribe(
      idMark => {
        const marcaId = idMark;
        this.venderService.provinciaId(this.provinciaValor).subscribe(
          idProvincia => {
            const provinciaId = idProvincia;

            const cocheTasado = {
              idMark: marcaId[0].id,
              idProvincia: provinciaId[0].id,
              email: this.myForm2.get('email')!.value,
              name: this.myForm2.get('name')!.value,
              primer_apellido: this.myForm2.get('primerApellido')!.value,
              fecha_nacimiento: this.myForm2.get('fecha_nacimiento')!.value,
              anyo: this.myForm.get('anyoMatriculacion')!.value,
              km: this.myForm.get('kilometros')!.value,
              matricula: this.myForm.get('matricula')!.value,
              estadoCoche: this.myForm3.get('estadoCoche')!.value
            }
            console.log(cocheTasado)
            this.venderService.guadarCocheTasado(cocheTasado)
            this.valorCoche = this.venderService.tasarCoche(cocheTasado, marcaId)
            this.mostrarForms = 0
          }
        );
      }
    );   
  }

  scrollToSection() {
    const section = this.elementRef.nativeElement.querySelector('#tasar');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  siguienteForm() {
    console.log(this.desplegableMarca)
    this.mostrarForms++;
    if (this.mostrarForms === 2) {
      this.progress = 66
    } else {
      this.progress = 100
    }
    const siniestroTotalValue = this.myForm.get('siniestroTotal')!.value;

    if (siniestroTotalValue === 'Si') {
      Swal.fire({
        title: '¡El vehículo ha tenido un siniestro total!',
        text: 'Si el vehículo ha tenido un siniestro total, lo lamentamos pero no lo aceptamos.',
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
        allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = ''
        }
      });
    } 
  }

  cambiarAcontacto () {
    window.location.href = 'contacto'
  }

  generarNumeros() {
    let numeros:any = [];
    for (let i = 2023; i >= 1999; i--) {
      if (!numeros.includes(i)) {
        numeros.push(i);
      }
    }
    this.anyosDesplegable = numeros;
  }

  cambioMarca () {
    this.venderService.desplegableModelos(this.myForm3.get('nameMark')!.value)
  }

  cambioModelo () {
    this.venderService.desplegableVersion(this.myForm3.get('nameMark')!.value, this.myForm3.get('nameModel')!.value)
  }

  sinSignosValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const sinSignos = /^[a-zA-Z0-9\s]*$/;
  
    if (value && !sinSignos.test(value)) {
      return { sinSignos: true };
    }
  
    return null;
  }

  // Formulario 1
  get matricula() { return this.myForm.get('matricula'); }
  get kilometros() { return this.myForm.get('kilometros'); }
  get anyoMatriculacion() { return this.myForm.get('anyoMatriculacion'); }
  get siniestroTotal() { return this.myForm.get('siniestroTotal'); }
  // Formulario 2
  get name() { return this.myForm2.get('name'); }
  get email() { return this.myForm2.get('email'); }
  get primerApellido() { return this.myForm2.get('primerApellido'); }
  get fecha_nacimiento() { return this.myForm2.get('fecha_nacimiento'); }
  get provincia() { return this.myForm2.get('provincia'); }
  // Formulario 3
  get nameMark() { return this.myForm2.get('nameMark'); }
  get nameModel() { return this.myForm2.get('nameModel'); }
  get nameVersion() { return this.myForm2.get('nameVersion'); }
  get estadoCoche() { return this.myForm2.get('estadoCoche'); }

  get desplegableProvincias () {
    return this.venderService.desplegableProvincias
  }

  get desplegableModelo () {
    return this.venderService.desplegableModelo
  }

  get desplegableVersion () {
    return this.venderService.desplegableVersionCoche
  }

  get desplegableMarca () {
    return this.venderService.desplegableMarca
  }
}
