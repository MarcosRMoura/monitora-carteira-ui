import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastrarCorretoraComponent} from './cadastrar-corretora/cadastrar-corretora.component';
import {CorretoraRoute} from './corretora.routes';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    CadastrarCorretoraComponent
  ],
  imports: [
    CommonModule,
    CorretoraRoute,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ButtonModule
  ]
})
export class CorretoraModule {
}
