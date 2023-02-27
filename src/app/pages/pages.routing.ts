import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

// COMPONENTS

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent, data:{ title: 'Inicio' } },
    { path: 'carrito', component: CarritoComponent, data:{ title: 'Carrito' } },
    { path: 'confirmacion', component: ConfirmacionComponent, data:{ title: 'Confirmacion' } },
    { path: '**', component: NoPageFoundComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}