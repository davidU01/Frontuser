import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  url = '/api/subjects';
  constructor(private http: HttpClient) { }

  //get materias
  getMaterias(){
    return this.http.get(this.url);
  }

  getUnaMateria(id:string){
    return this.http.get(this.url+'/'+id);
  }

  addMateria(materia:materia){
    return this.http.post(this.url, materia);
  }

  deleteMateria(id:number){
    return this.http.delete(this.url+'/'+id);
  }

  modifyMateria(id:string, materia:materia) {
    return this.http.put(this.url+'/'+id, materia);
  }
}

export interface materia {
  subject_id?:number;
  subject_code?:string;
  subject_name?:string; 
  credits?:string;
  subject_seats?:string;
  subject_status?:string;
}


