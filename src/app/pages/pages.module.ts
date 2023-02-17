import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  exports: [
    InicioComponent
  ],
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
