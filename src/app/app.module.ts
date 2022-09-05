import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddActividadComponent } from './home/add-actividad/add-actividad.component';
import { FormsModule } from '@angular/forms';
import {ActividadComponenteService} from './actividad-componente.service';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddActividadComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [ActividadComponenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
