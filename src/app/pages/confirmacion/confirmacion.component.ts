import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WompiService } from 'src/app/services/wompi.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor(  private activatedRoute: ActivatedRoute,
                private wompiService: WompiService){

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
          console.log(data);
          

        });

  }

}
