import { Component, OnInit, HostBinding } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Ipaciente } from 'src/app/models/Ipaciente';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'tablaPacientes',
  templateUrl: './tablaPacientes.component.html',
  styleUrls: ['./tablaPacientes.component.css']
})
export class TablaPacientesComponent{
  public pacientes: Ipaciente[] = []; // Registros a mostrar en la página actual
  public filteredPacientes: Ipaciente[] = [];
  public searchText: string = '';
  public totalRegistros: number = 10; // Total de registros en la lista
  public paginaActual: number = 1; // Página actual
  public expedienteBuscar: number = 0;

  constructor(private pacientesService: PacientesService, private router: Router, private activateRoute: ActivatedRoute) { }
  reset: boolean = false;

  ngOnInit() {
    this.getPacientes();
    this.paginarPacientes();
    this.buscarPaciente();

  }


  getPacientes() {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data.sort((a: { expediente: number; }, b: { expediente: number; }): number => b.expediente - a.expediente);
      this.filteredPacientes = data;
      this.paginarPacientes();//Llama a la función aquí para paginar automáticamente
    });
  }


  buscarPaciente() {
    if (this.expedienteBuscar === 0) {
      this.getPacientes(); // Si no se proporciona expediente, muestra todos los pacientes
    } else {
      this.pacientesService.getPaciente(this.expedienteBuscar).subscribe(data => {
        this.filteredPacientes = data;
        this.paginarPacientes();
      });
    }
  }







  delete(id: number) {
    this.pacientesService.deletePaciente(id).subscribe(data => {
      this.pacientes = data;
      this.ngOnInit();
    });
  }




  busqueda: string = '';
  order: string = 'asc';



  sortTable(colu: string) {
    if (this.order === 'asc') {
      this.pacientes.sort((a, b) => a[colu] > b[colu] ? 1 : -1);
      this.order = 'desc';
    } else {
      this.pacientes.sort((a, b) => a[colu] < b[colu] ? 1 : -1);
      this.order = 'asc';
    }
  }

  onPageChange(pageNumber: number) {
    this.paginaActual = pageNumber;
    this.paginarPacientes();
  }

  paginarPacientes() {
    const tamanoPagina = 10;
    const indiceInicio = (this.paginaActual - 1) * tamanoPagina;
    const indiceFin = indiceInicio + tamanoPagina;
    this.filteredPacientes = this.pacientes.slice(indiceInicio, indiceFin);
    this.totalRegistros = this.filteredPacientes.length; // Agrega esta línea para actualizar el número total de registros por página
  }


  getPaginas(): number[] {
    const totalPaginas = Math.ceil(this.filteredPacientes.length / this.totalRegistros);

    // Verificar si totalPaginas es válido antes de crear el array
    if (totalPaginas <= 0) {
      return [];
    }

    return Array.from({ length: 10 }, (_, index) => index + 1);
  }


  totalPaginas(): number {
    return Math.ceil(this.pacientes.length / this.totalRegistros);

  }


}

