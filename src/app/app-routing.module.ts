import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormReactivComponent } from './form-reactiv/form-reactiv.component';

const routes: Routes = [
  {path: '', component: ListaUsuariosComponent,
  children: [
    { path: 'formulario/:id', component: FormReactivComponent },
    { path: 'formulario', component: FormReactivComponent }
 ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
