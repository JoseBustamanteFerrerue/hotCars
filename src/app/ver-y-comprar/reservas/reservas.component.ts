import { Component, OnInit } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { FilterPipe } from './filter.pipe';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit{
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  p: number = 1;
  filtro: string = '';
  usuario: any;
  constructor (private verYcomprar: VerYComprarService) {}
  ngOnInit () {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario);
    } 
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
    this.cochesReservados.sort((a: any, b: any) => {
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
    const datosMapeados = this.cochesReservados.map((item: any) => {
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

  eliminarReserva (item: any) {
    Swal.fire({
      title: 'Confirmar acción',
      text: '¿Estás seguro de borrar esta reserva?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario ha confirmado la acción
        this.verYcomprar.deleteReserva(item);
        //Swal.fire('Acción confirmada', 'La acción se ha realizado correctamente', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la acción
        Swal.fire('Acción cancelada', 'La acción ha sido cancelada', 'error');
      }
    });
  }

  get cochesReservados () {
    return this.verYcomprar.cochesReservados
  }
}
