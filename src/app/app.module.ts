import { jsDocComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { IncripcionComponent } from './incripcion/incripcion.component';
import { CancelarComponent } from './cancelar/cancelar.component';
import { IncribirEstudianteComponent } from './incribir-estudiante/incribir-estudiante.component';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MateriasComponent,
    IncripcionComponent,
    CancelarComponent,
    IncribirEstudianteComponent,
    CrearMateriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
