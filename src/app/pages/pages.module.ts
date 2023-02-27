import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



@NgModule({
  exports: [
    InicioComponent
  ],
  declarations: [
    InicioComponent,
    CarritoComponent,
    ConfirmacionComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
