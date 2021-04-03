import { Component } from '@angular/core';

@Component({//Esto es un decorador, es una funcionalidad que se le aplica a una clase y modifica el comportamiento de la clase 
  selector: 'app-root', //Lo de aqui son caracteristicas y propiedades qeu tendra este componente
  templateUrl: './app.component.html',// indicarle que vista y donde esta esa vista
  styleUrls: ['./app.component.css']//hojas de estilo aplicadas especificamente a este componente
})
export class AppComponent {//en la clase del componente esta la logica del componente
  title = 'ProAngular Juan Dmaian';//se manda a app.component.html
}
