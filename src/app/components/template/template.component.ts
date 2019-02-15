import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `.ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {
   usuario:object={
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "",
    acepta:false
  };
  paises:object = [
    {
      codigo:"ARG",
      nombre:"Argentina"
    },
    {
      codigo: "URU",
      nombre: "Uruguay"
    }
  ];
  sexos:string[] = [
    "Hombre",
    "Mujer"
  ];

  constructor() { }

  ngOnInit() {
  }
  guardar(forma:NgForm){
    console.log("formulario posteado");
    console.log("NgForm: ",forma);
    console.log("Valor: ",forma.value);
    console.log("usuario: ",this.usuario);
  }
}
