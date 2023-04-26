import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  lista:usuario[]
  constructor(public crud:CrudService, private route: ActivatedRoute,
    private router: Router  ){}
  ngOnInit(){
    this.crud.mostrar().subscribe(val => this.lista = val)
  }

}
