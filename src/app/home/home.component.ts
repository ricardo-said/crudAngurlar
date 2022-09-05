import { Component, OnInit } from '@angular/core';
import { ActividadComponenteService } from '../actividad-componente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public actividades:Array<string>=['actividad','actividad1','actividad2'];
  actividades:Array<string>=[];
  actividadesEchas:Array<string>=[];
  
  constructor(private actividadService: ActividadComponenteService) { }

  ngOnInit(): void {
    this.actividades= this.actividadService.actividades;
    this.actividadesEchas= this.actividadService.actividadesEchas;
  }
  nuevaAct(actividad:string){
    // this.actividades.push(actividad);
    this.actividadService.addActi(actividad);
  }
  actTerminada(i:number,actividad:string)
  {
    console.log(i)
    this.actividadService.actTerminada(i,actividad);

    // this.actividadesEchas.push(actividad);

  }
}
