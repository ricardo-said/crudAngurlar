import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadComponenteService {

  public actividades:Array<string>=['hola','hola1','hola2'];
  public actividadesEchas:Array<string>=[];
  actTotales:Array<string>= [];
  total:number=0;
  actEchas:number=0;
  porcentaje:number=0;
  // actTotales:number=this.actividades.length;

  addActi(actividad:string){
    this.actividades.push(actividad);
  }
  actTerminada(i:number, actividad:string){
    this.actividades.splice(i,1);
    this.actividadesEchas.push(actividad);
    console.log(actividad);
  }

  actTotal(){
    this.actTotales=this.actividades.concat(this.actividadesEchas);
    this.total=this.actTotales.length;
    this.actEchas=this.actividadesEchas.length;
         this.porcentaje=(100 * this.actEchas/this.total);

    // else{
    //   this.porcentaje=
    // }
 

    // console.log(this.actTotales.length);
    // console.log(this.actividadesEchas.length)
    console.log(this.total);
    console.log(this.actEchas);
    
    console.log(this.porcentaje)
    
  // actEcha(actividad:string){

  }
  constructor() { }
}
