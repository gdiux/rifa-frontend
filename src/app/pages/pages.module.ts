import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  exports: [
    InicioComponent
  ],
  declarations: [
    InicioComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
