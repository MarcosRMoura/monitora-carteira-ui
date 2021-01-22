import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastarUsuarioComponent} from './cadastar-usuario/cadastar-usuario.component';
import {UsuarioRoute} from './usuario.routes';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';


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
    RadioButtonModule,
    CalendarModule,
    ButtonModule,

    BrowserAnimationsModule
  ], providers: []
})
export class UsuarioModule {
}
