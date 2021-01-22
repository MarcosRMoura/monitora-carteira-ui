import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastrarCarteiraComponent} from './cadastrar-carteira/cadastrar-carteira.component';
import {CarteiraRoute} from './carteira.routes';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [CadastrarCarteiraComponent],
  imports: [
    CommonModule,
    CarteiraRoute,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class CarteiraModule {
}
