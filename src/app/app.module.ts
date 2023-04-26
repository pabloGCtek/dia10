import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactivComponent } from './form-reactiv/form-reactiv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReactivComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
