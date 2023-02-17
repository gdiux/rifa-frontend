import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  constructor(  private cartService: CartService){}


  /** ======================================================================
   * CAMBIAR CANTIDAD
  ======================================================================== */
  public cantt: number = 1;
  upCant( cant: any ){ this.cantt = Number(cant) }

  /** ======================================================================
   * ADD OR REMOVE QTY OF CART
  ======================================================================== */
  updateQty(qty: number){

    this.cartService.carrito.qty! = qty;

    this.cartService.updateQty();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Se a actualizado el carrito, tienes ${qty} boletas`,
      showConfirmButton: false,
      timer: 1500
    })

  }



}
