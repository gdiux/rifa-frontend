import { Component } from '@angular/core';
import { Carrito } from 'src/app/models/carrito.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  public carrito!: Carrito;

  constructor(  private cartService: CartService){
    this.carrito = cartService.carrito;
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
