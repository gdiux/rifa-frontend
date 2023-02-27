import { Component, OnInit } from '@angular/core';

import {UUID} from 'uuid-generator-ts';

import { Carrito } from 'src/app/models/carrito.model';
import { CartService } from 'src/app/services/cart.service';

import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carrito!: Carrito;
  public uuid: any;
  public precio: number = environment.precio;
  public pub_key: string = environment.pub_key;
  public url: string = `${environment.local_url}/confirmacion`;

  constructor(  private cartService: CartService){
    this.carrito = cartService.carrito;
  }

  ngOnInit(): void {

   this.precio = environment.precio;
   this.uuid = new UUID();   

  }

  /** ======================================================================
   * ADD OR REMOVE QTY OF CART
  ======================================================================== */
  updateQty(qty: any){

    qty = Number(qty);

    this.cartService.carrito.qty! = qty;

    this.cartService.updateQty();

  }

}
