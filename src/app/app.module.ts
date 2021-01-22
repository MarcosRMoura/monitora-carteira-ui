import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {UsuarioModule} from './view/usuario/usuario.module';
import {BarraNavegacaoComponent} from './barra-navegacao/barra-navegacao.component';
import {UsuarioService} from './service/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {CorretoraModule} from './view/corretora/corretora.module';
import {CarteiraModule} from './view/carteira/carteira.module';
import {AtivoModule} from './view/ativo/ativo.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    CorretoraModule,
    CarteiraModule,
    AtivoModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    // Corretora
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
