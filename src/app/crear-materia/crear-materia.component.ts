import { Component, OnInit } from '@angular/core';
import{MateriaService, materia} from '../Services/materia.service'

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

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

  // eliminar(id:string){
  //   this.MateriaService.deleteMateria(id).subscribe(
  //     res => {
  //       console.log("Materia Eliminada");
  //       this.listarMateria();
  //     },
  //     err => console.log(err)
  //   );
  // }

}
