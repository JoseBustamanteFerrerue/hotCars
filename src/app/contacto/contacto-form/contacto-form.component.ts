import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoServiceService } from '../contacto-service.service';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { FilterPipe } from './filter.pipe';
@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {
  userForm!: FormGroup;
  usuario: any;
  p: number = 1;
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  filtro: string = '';

  constructor(private formBuilder: FormBuilder, private contactoService: ContactoServiceService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(5)]],
      terms: [false, Validators.requiredTrue]
    });

    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario);
    } 
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
    this.contactoService.consulta(this.userForm.value)
  }

  get message() { return this.userForm.get('message'); }
  get terms() { return this.userForm.get('terms'); }

  get consultas () {
    return this.contactoService.resp
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
    this.consultas.sort((a: any, b: any) => {
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

  borrarConsulta (item: any) {
    Swal.fire({
      title: 'Confirmar acción',
      text: '¿Estás seguro de borrar esta consulta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario ha confirmado la acción
        this.contactoService.deleteConsulta(item);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la acción
        Swal.fire('Acción cancelada', 'La acción ha sido cancelada', 'error');
      }
    });
  }

  exportToExcel(): void {
    const columnasPersonalizadas: { [key: string]: string } = {
      name: 'Nombre',
      primerApellido: 'Primer Apellido',
      segundoApellido: 'Segundo Apellido',
      fecha_nacimiento: 'Fecha de Nacimiento',
      email: 'Email',
      telefono: 'Teléfono',
      motivo: 'Motivo',
      fecha_consulta: 'Fecha de consulta'
    };


    // Mapear los datos utilizando los nombres personalizados
    const datosMapeados = this.consultas.map((item: any) => {
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
    saveAs(data, 'contactos.xlsx');
  }
}

