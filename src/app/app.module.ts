import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {UsuarioModule} from './usuario/usuario.module';
import {BarraNavegacaoComponent} from './barra-navegacao/barra-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
