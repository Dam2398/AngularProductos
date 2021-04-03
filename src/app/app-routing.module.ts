import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path: '', component: ListarProductosComponent},// si es vacia que nos renderize a ese componente
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-proucto/:id', component: CrearProductoComponent},//se agrega el comodin id para pasarle un producto 
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


