import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WompiService } from 'src/app/services/wompi.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor(  private activatedRoute: ActivatedRoute,
                private wompiService: WompiService,
                private cartService: CartService){

                  activatedRoute.queryParams.subscribe( ({id}) => {

                    console.log(id);
                    this.getTransactionId(id);
                    

                  })

                }

  ngOnInit(): void {
    
  }

  /** =======================================================
   * OBTENER TRANSACCION
  ========================================================= */
  public transaction: any;
  getTransactionId(id: string){

    this.wompiService.getTransaccionId(id)
        .subscribe( ({data}: any)  => {

          this.transaction = data;
          
          if (data.status === 'APPROVED') {
            this.updateQty(0);
          }

        });

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
