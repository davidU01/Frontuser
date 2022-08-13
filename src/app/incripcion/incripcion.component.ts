import { Component, OnInit } from '@angular/core';
import{MateriaService, materia} from '../Services/materia.service'

@Component({
  selector: 'app-incripcion',
  templateUrl: './incripcion.component.html',
  styleUrls: ['./incripcion.component.css']
})
export class IncripcionComponent implements OnInit {

  ListarMateria: materia[] = [];

  constructor(private MateriaService: MateriaService) { }

  ngOnInit(): void {
    this.listarMateria();
  }

  listarMateria(){
    this.MateriaService.getMaterias().subscribe(
      res=> {
        console.log(res);
        
         console.log(this.ListarMateria);
         this.ListarMateria=<any>res;
      },
      err => console.log(err)
    ); 
    }

}
