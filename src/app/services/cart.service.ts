import { Injectable } from '@angular/core';
import { Carrito } from '../models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrito: Carrito = { 
    qty: 0,
    name: '',
    email: '',
    phone: ''
  };

  constructor() { }

  /** ========================================================
   * LOAD CART OF LOCALSTORAGE
  ========================================================= */
  loadCart(){

    if (localStorage.getItem('carrito')) {

      let local = JSON.parse(localStorage.getItem('carrito') || '');

      this.carrito.qty = local.qty;
      this.carrito.name = local.name;
      this.carrito.email = local.email;
      this.carrito.phone = local.phone;      

    }

  }

  /** ========================================================
   * UPDATE QTY
  ========================================================= */
  updateQty(){    
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
