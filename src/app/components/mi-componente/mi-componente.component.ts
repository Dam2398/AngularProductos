import { Component } from "@angular/core";//es un core de angular que ya hemos instalado anteriormente
//clase Component

@Component({//decorador esto es un json
    //"selector" es la etiqueta para llamarla en el html
    selector: 'mi-componente',//el template lleva acentos invertidos
    templateUrl: './mi-componente.component.html'//cunado sea otra pagina usar url
})//no poner ";"

export class MiComponente{

    public titulo: string;
    public  comentario: string;
    public year: number;


    constructor(){
        this.titulo= "Hola soy MI COMPONENTE";
        this.comentario="Este es mi primer componente";
        this.year=2021;

        console.log("Componente mi-componente cargado!!");
        console.log(`${this.titulo} ${this.comentario} ${this.year}`)
    }
}