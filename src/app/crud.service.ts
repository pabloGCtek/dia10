import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { usuario } from './model/usuario';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  listaus: usuario [] = [
    {id:1,dni:"001",nombre:"pepe",horas:100},
    {id:2,dni:"002",nombre:"Juan",horas:110},
    {id:3,dni:"003",nombre:"Sara",horas:140}
  ]
  constructor() { }

  mostrar():Observable<usuario[]>{
    return of(this.listaus)
  }
  buscar(id:number){
    let f = this.listaus.find(f => f.id == id)
    if (f != undefined){
      return of(f)
    }
    return of({id:-1,dni:"",nombre:"",horas:0},)
  }
  modifica(usuario:usuario){
   
    let f = this.listaus.find(f => f.id === Number(usuario.id))
    if (f != undefined){
      this.listaus.splice(this.listaus.indexOf(f),1, usuario)
    }else{
      
    }
  }
  crear(usuario:usuario){
    let f = this.listaus.find(f => f.id === usuario.id)
    if (f == undefined){
      this.listaus.push(usuario)
    }else{
    }
  }
}
