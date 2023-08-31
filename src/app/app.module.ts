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
import { BuscarComponent } from './pacientes/buscar/buscar.component';
import { IngresoComponent } from './pacientes/ingreso/ingreso.component';
import { CitasComponent } from './citas/citas/citas.component';




const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tablaPacientes', component: TablaPacientesComponent },
  { path: 'crear', component: FormularioPacienteComponent },
  { path: 'paciente/edit/:id', component: FormularioPacienteComponent },
  { path: 'buscar/view/:id', component: BuscarComponent},
  { path: 'ingreso/view/:id', component: IngresoComponent },
  { path: 'citas', component: CitasComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TablaPacientesComponent,
    BuscarComponent,
    CitasComponent,
    FormatoDPIPipe,
    NumberToTextPipe,
    EdadPipe,
    FortmatPhone,
    FormularioPacienteComponent,
    IngresoComponent,


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
      { path: 'buscar/view/:id', component: BuscarComponent},
      { path: 'ingreso/view/:id', component: IngresoComponent },
      { path: 'citas', component: CitasComponent },



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

