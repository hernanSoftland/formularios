import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{

  usuario:object={
    nombrecompleto:{
      nombre:"Hernán",
      apellido:"Arena"
    },
    correo:"hernan.arena@gmail.com",
    pasatiempos:["Dormir","jugar","correr"]
  }

  forma:FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required,
                                       Validators.minLength(3)
                                  ]),
        'apellido': new FormControl('', [Validators.required,this.noArena])
      }),
      'correo': new FormControl('', [Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                ]),
      'pasatiempos': new FormArray([
        new FormControl('Nuevo',Validators.required)
      ])
    });
    ///this.forma.setValue(this.usuario);
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('',Validators.required)
    );
  }
  noArena( control:FormControl):{[s:string]:boolean}{
    if(control.value === "Arena"){
      return {
        noarena:true
      }

    }

  }


  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    /*this.forma.reset({
      nombrecompleto:{
        nombre:"",
        apellido:""
      },
      correo:""
    })*/
  }

}
