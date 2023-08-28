
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { FormatoDPIPipe } from './pipe/formatoDPI.pipe';
import { NumberToTextPipe } from './pipe/number-to-text.pipe';
import { EdadPipe } from './pipe/Edad.pipe';
import { FortmatPhone } from './pipe/telefono.pipe';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TablaPacientesComponent } from './pacientes/tablaPacientes/tablaPacientes.component';
import { FormularioPacienteComponent } from './pacientes/formulario-paciente/formulario-paciente.component';
// import { PacienteCrudComponent } from './pacientes/paciente-crud/paciente-crud.component';
// import { DetallePacienteComponent } from './pacientes/detallePaciente/detallePaciente.component';
// import { ConsultasComponent } from './consultas/consultas/consultas.component';
// import { UnisauComponent } from './UNISAU/unisau/unisau.component';
// import { ConstanciasComponent } from './constancias/constancias/constancias.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tablaPacientes', component: TablaPacientesComponent },
  { path: 'crear', component: FormularioPacienteComponent },
  { path: 'paciente/edit/:id', component: FormularioPacienteComponent},
  // { path: 'detalleP/view/:id', component: DetallePacienteComponent },
  // { path: 'consultas', component: ConsultasComponent },
  // { path: 'unisau', component: UnisauComponent },
  // { path: 'constancias', component: ConstanciasComponent },



]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TablaPacientesComponent,
    // PacienteCrudComponent,
    // PacientesComponent,
    // UnisauComponent,
    // ConstanciasComponent,
    // HomeComponent,
    // ConsultasComponent,
    // DetallePacienteComponent,
    FormatoDPIPipe,
    NumberToTextPipe,
    EdadPipe,
    FortmatPhone,
    FormularioPacienteComponent,

   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'pacientes', component: TablaPacientesComponent },
      { path: 'crear', component: FormularioPacienteComponent },
      { path: 'paciente/edit/:id', component: FormularioPacienteComponent },
      // { path: 'detalleP/view/:id', component: DetallePacienteComponent },
      // { path: 'consultas', component: ConsultasComponent },
      // { path: 'unisau', component: UnisauComponent },
      // { path: 'constancias', component: ConstanciasComponent },



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

