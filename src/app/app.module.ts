import { NgModule } from '@angular/core';//modulo principal
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";//pal routeo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//todos los componentes se deben declarar en app.module.ts (aqui)
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';//importamos este componente
import { ListarProductosComponent} from './components/listar-productos/listar-productos.component';

@NgModule({
  declarations: [//aqui se pueden declarar componentes, directivas, pipes
    AppComponent, 
    CrearProductoComponent, 
    ListarProductosComponent
  ],
  imports: [//en imports se declaran todos los modulos
    BrowserModule,
    AppRoutingModule,//routeo
    ReactiveFormsModule,//manejar formularios
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]//se declara cual es el component inicial sobre el cual se estara cargando todo la aplicacion
})
export class AppModule { }
