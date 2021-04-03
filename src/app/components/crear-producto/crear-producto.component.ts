import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Se importa el formgroup

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;//productoForm es el nombre que va en el html []

  constructor(private fb: FormBuilder) { 
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],//cada nombre en cada entrada del formulario
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm)//imprime lo que se agrego
  }

}
