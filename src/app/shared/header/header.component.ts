import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public carrito!: Carrito;

  constructor(  private cartService: CartService){
    this.carrito = cartService.carrito;
  }

  ngOnInit(): void {
    this.cartService.loadCart();
  }

}
