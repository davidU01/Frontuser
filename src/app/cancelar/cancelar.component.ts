import { Component, OnInit } from '@angular/core';
import{MateriaService, materia} from '../Services/materia.service'

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent implements OnInit {

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

    eliminar(subject_id:number){
      this.MateriaService.deleteMateria(subject_id).subscribe(
        res => {
          console.log("Materia Eliminada");
          this.listarMateria();
        },
        err => console.log(err)
      );
    }

    
}
