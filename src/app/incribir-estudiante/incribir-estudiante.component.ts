import { Component, OnInit } from '@angular/core';
import { estudiante, EstudianteService } from '../Services/estudiante.service';

@Component({
  selector: 'app-incribir-estudiante',
  templateUrl: './incribir-estudiante.component.html',
  styleUrls: ['./incribir-estudiante.component.css']
})
export class IncribirEstudianteComponent implements OnInit {

  ListarEstudiante: estudiante[] = [];

  constructor(private EstudianteService: EstudianteService) { 
    
  }

  ngOnInit(): void {
    this.listarEstudiante(); 
  }

  listarEstudiante(){
    this.EstudianteService.getEstudiantes().subscribe(
      res=> {
        console.log(res);
        
         console.log(this.ListarEstudiante);
         this.ListarEstudiante=<any>res;
      },
      err => console.log(err)
    ); 
  }

}
