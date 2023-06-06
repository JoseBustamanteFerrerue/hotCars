import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { VenderServiceService } from '../vender.service.service';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { FilterPipe } from './filter.pipe';
@Component({
  selector: 'app-vender-form',
  templateUrl: './vender-form.component.html',
  styleUrls: ['./vender-form.component.css']
})
export class VenderFormComponent implements OnInit {
  myForm!: FormGroup;
  myForm2!: FormGroup;
  myForm3!: FormGroup;
  filtro: string = '';
  mostrarForms: number = 1;
  progress = 33;
  type = 'success';
  valorCoche: any;
  nameMarkValor: any
  nameModelValor: any
  nameVersionValor: any
  provinciaValor: any
  anyosDesplegable: any
  usuario: any =
    {
      rol: ''
    }
  p: number = 1;
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  

  ngOnInit() {

    this.generarNumeros();

    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario);
    }

    this.myForm = this.formBuilder.group({
      matricula: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{4}[A-Z]{3}$')]],
      kilometros: ['', [Validators.required]],
      anyoMatriculacion: ['', [Validators.required]],
      siniestroTotal: ['', [Validators.required]],
    });

    this.myForm2 = this.formBuilder.group({
      name: ['', [Validators.required, this.sinSignosValidator, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, this.phoneLengthValidator]],
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

  phoneLengthValidator(control: AbstractControl): ValidationErrors | null {
    const phone = control.value as number;
    const minLength = 9;
    const maxLength = 9;
  
    if (phone.toString().length < minLength || phone.toString().length > maxLength) {
      return { phoneLength: true };
    }
  
    return null;
  }

  
  // Función para ordenar los datos
  sortData(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    // Lógica para ordenar los datos en función de la columna y dirección de ordenamiento
    this.cochesTasados.sort((a: any, b: any) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getSortIcon(column: string): string {
    if (this.sortedColumn === column) {
      return this.sortDirection === 'asc' ? 'fas fa-solid fa-arrow-up' : 'fas fa-solid fa-arrow-down';
    } else {
      return '';
    }
  }
  constructor(private elementRef: ElementRef, private formBuilder: FormBuilder, private venderService: VenderServiceService) {

  }


  enviarDatosForm() {
    this.nameMarkValor = this.myForm3.get('nameMark')!.value
    this.nameModelValor = this.myForm3.get('nameModel')!.value
    this.nameVersionValor = this.myForm3.get('nameVersion')!.value
    this.provinciaValor = this.myForm2.get('provincia')!.value

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
              telefono: this.myForm2.get('telefono')!.value,
              name: this.myForm2.get('name')!.value,
              primer_apellido: this.myForm2.get('primerApellido')!.value,
              fecha_nacimiento: this.myForm2.get('fecha_nacimiento')!.value,
              anyo: this.myForm.get('anyoMatriculacion')!.value,
              km: this.myForm.get('kilometros')!.value,
              matricula: this.myForm.get('matricula')!.value,
              estadoCoche: this.myForm3.get('estadoCoche')!.value,
              valorTasado: ''
              
            }
            this.valorCoche = this.venderService.tasarCoche(cocheTasado, marcaId)
            cocheTasado.valorTasado = this.valorCoche;
            this.venderService.guadarCocheTasado(cocheTasado)
            
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

  cambiarAcontacto() {
    window.location.href = 'contacto'
  }

  generarNumeros() {
    let numeros: any = [];
    for (let i = 2023; i >= 1999; i--) {
      if (!numeros.includes(i)) {
        numeros.push(i);
      }
    }
    this.anyosDesplegable = numeros;
  }

  cambioMarca() {
    this.venderService.desplegableModelos(this.myForm3.get('nameMark')!.value)
  }

  cambioModelo() {
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

  borrarCocheTasado(item: any) {
    Swal.fire({
      title: 'Confirmar acción',
      text: '¿Estás seguro de borrar este coche tasado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario ha confirmado la acción
        this.venderService.deleteCoche(item);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la acción
        Swal.fire('Acción cancelada', 'La acción ha sido cancelada', 'error');
      }
    });
  }

  exportToExcel(): void {
    const columnasPersonalizadas: { [key: string]: string } = {
      name: 'Nombre',
      primer_apellido: 'Primer Apellido',
      fecha_nacimiento: 'Fecha de Nacimiento',
      email: 'Email',
      telefono: 'Teléfono',
      nameMark: 'Marca',
      nameModel: 'Modelo',
      nameVersion: 'Versión',
      valor_tasado: 'Valor Tasado',
      valor: 'Valor',
      provincia: 'Provincia'
    };


    // Mapear los datos utilizando los nombres personalizados
    const datosMapeados = this.cochesTasados.map((item: any) => {
      const nuevoItem: any = {};
      Object.keys(item).forEach(key => {
        const columnaPersonalizada = columnasPersonalizadas[key];
        if (columnaPersonalizada) {
          nuevoItem[columnaPersonalizada as keyof typeof nuevoItem] = item[key];
        }
      });
      return nuevoItem;
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(datosMapeados);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'cochesTasados.xlsx');
  }


  // Formulario 1
  get matricula() { return this.myForm.get('matricula'); }
  get kilometros() { return this.myForm.get('kilometros'); }
  get anyoMatriculacion() { return this.myForm.get('anyoMatriculacion'); }
  get siniestroTotal() { return this.myForm.get('siniestroTotal'); }
  // Formulario 2
  get name() { return this.myForm2.get('name'); }
  get email() { return this.myForm2.get('email'); }
  get telefono() { return this.myForm2.get('telefono'); }
  get primerApellido() { return this.myForm2.get('primerApellido'); }
  get fecha_nacimiento() { return this.myForm2.get('fecha_nacimiento'); }
  get provincia() { return this.myForm2.get('provincia'); }
  // Formulario 3
  get nameMark() { return this.myForm2.get('nameMark'); }
  get nameModel() { return this.myForm2.get('nameModel'); }
  get nameVersion() { return this.myForm2.get('nameVersion'); }
  get estadoCoche() { return this.myForm2.get('estadoCoche'); }

  get desplegableProvincias() {
    return this.venderService.desplegableProvincias
  }

  get desplegableModelo() {
    return this.venderService.desplegableModelo
  }

  get desplegableVersion() {
    return this.venderService.desplegableVersionCoche
  }

  get desplegableMarca() {
    return this.venderService.desplegableMarca
  }

  get cochesTasados() {
    return this.venderService.cochesTasados
  }
}
