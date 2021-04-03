import { NgModule } from '@angular/core';//modulo principal
import { BrowserModule } from '@angular/platform-browser';
//todos los componentes se deben declarar en app.module.ts (aqui)
import { AppComponent } from './app.component';//importamos este componente


@NgModule({
  declarations: [//aqui se pueden declarar componentes, directivas, pipes
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//se declara cual es el component inicial sobre el cual se estara cargando todo la aplicacion
})
export class AppModule { }
