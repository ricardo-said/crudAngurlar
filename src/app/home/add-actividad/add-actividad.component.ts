import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.css']
})
export class AddActividadComponent implements OnInit {
  nuevaAct:string='';
  @Output() agregarActividad: EventEmitter<string>= new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  agregarAct(){
    this.agregarActividad.emit(this.nuevaAct);
    console.log(this.nuevaAct);
  }

}
