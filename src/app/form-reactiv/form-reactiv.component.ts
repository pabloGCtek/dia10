import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { usuario } from '../model/usuario';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-reactiv',
  templateUrl: './form-reactiv.component.html',
  styleUrls: ['./form-reactiv.component.css']
})
export class FormReactivComponent {
  form: FormGroup
  usu:usuario
  idAux:number

constructor(private rutas:Router, private activarRutas:ActivatedRoute, public crud:CrudService){} 
ngOnInit(){
  this.activarRutas.params.subscribe((val) => {
    this.crud.buscar(val['id']).subscribe(v=> {
      this.idAux= v['id']
      this.form = new FormGroup({
        id: new FormControl(),
        dni: new FormControl(v['dni']),
        nombre: new FormControl(v['nombre']),
        horas: new FormControl(v['horas'])
    }
    )
    })
  }
  )
}
  submit():void{
    this.usu ={id:this.form.get("id")?.value,dni:this.form.get("dni")?.value,nombre:this.form.get("nombre")?.value,horas:this.form.get("horas")?.value}
    if(this.idAux == -1){
      this.crud.crear(this.usu)
    }else{
      this.usu['id'] = this.idAux
      this.crud.modifica(this.usu)
    }
    this.rutas.navigate([""])
  }
}
