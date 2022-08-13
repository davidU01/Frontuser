import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  url = '/apiRest/Usuarios';
  constructor(private http: HttpClient ) { }

  //get materias
  getEstudiantes(){
    return this.http.get(this.url);
  }

  getUnEstudiantes(id:string){
    return this.http.get(this.url+'/'+id);
  }

  addEstudiante(estudiante:estudiante){
    return this.http.post(this.url, estudiante);
  }

  deleteEstudiante(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  modifyEstudiante(id:string, estudiante:estudiante) {
    return this.http.put(this.url+'/'+id, estudiante);
  }
}

export interface estudiante {
  numero_documento?:string;
  tipo_documento?:string;
  nombre_completo?:string;
  nombre_departamento?:string;   
  fecha_fin_contrato?:string;   
  cargo?:string;
  email?:string;
  estado?:number;
}
