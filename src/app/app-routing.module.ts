import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelarComponent } from './cancelar/cancelar.component';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { HomeComponent } from './home/home.component';
import { IncribirEstudianteComponent } from './incribir-estudiante/incribir-estudiante.component';
import { IncripcionComponent } from './incripcion/incripcion.component';
import { MateriasComponent } from './materias/materias.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent },
  { path:'materias', component: MateriasComponent },
  { path:'incripcion', component: IncripcionComponent },  
  { path:'cancelar', component: CancelarComponent },
  { path: 'incribirEstudiante', component: IncribirEstudianteComponent },
  { path: 'crearMateria', component: CrearMateriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
