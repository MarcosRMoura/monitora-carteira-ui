import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastrarAtivoComponent} from './cadastrar-ativo/cadastrar-ativo.component';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AtivoRoute} from './ativo.routes';


@NgModule({
  declarations: [CadastrarAtivoComponent],
  imports: [
    CommonModule,
    AtivoRoute,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class AtivoModule {
}
