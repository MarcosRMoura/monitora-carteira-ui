import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastarUsuarioComponent} from './cadastar-usuario/cadastar-usuario.component';
import {UsuarioRoute} from './usuario.routes';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CadastarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoute,
    FormsModule,
    InputTextModule,

  ]
})
export class UsuarioModule {
}
