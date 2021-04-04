import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Se importa el formgroup
import { Router } from '@angular/router';//se importa la clase porque se usa en el constructor, para hacer cambio de componentes desde el componente
import { ToastrService } from 'ngx-toastr';
import { Producto } from "src/app/models/producto";

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;//productoForm es el nombre que va en el html []

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService            
              ) { 
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],//cada nombre en cada entrada del formulario
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){//es el boton
    //console.log(this.productoForm)//imprime lo que se agrego
    //console.log(this.productoForm.get('producto')?.value)//valor de poducto

    const PRODUCTO: Producto ={
      nombre : this.productoForm.get('producto')?.value,
      categoria :this.productoForm.get('categoria')?.value,
      ubicacion : this.productoForm.get('ubicacion')?.value,
      precio : this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO);
    this.toastr.success('El producto fue registrado con exito.', 'Producto registrado!');
    this.router.navigate(['/'])//que vaya a la ruta raiz
  }

}
