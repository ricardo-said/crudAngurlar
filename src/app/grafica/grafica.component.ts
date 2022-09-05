import { Component, OnInit } from '@angular/core';
import { ActividadComponenteService } from '../actividad-componente.service';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  porcentajeAct:number=0;
  constructor(private actividadService: ActividadComponenteService) { }

  ngOnInit(): void {
    this.porcentajeAct=this.actividadService.porcentaje;
  }

  porcentaje(){
    this.actividadService.actTotal();
  }
}
