// import {RouterModule, Routes} from "@angular/router";
// import {ModuleWithProviders} from "@angular/core";
// import {AuthGuard} from "@nuvem/angular-base";
// import {ConsultarNotificacaoComponent} from "./consultar-notificacao/consultar-notificacao.component";
// import {VisualizarNotificacaoComponent} from "./visualizar-notificacao/visualizar-notificacao.component";
// import {EditarNotificacaoComponent} from "./editar-notificacao/editar-notificacao.component";
import {CadastarUsuarioComponent} from './cadastar-usuario/cadastar-usuario.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';


export const routes: Routes = [
  {
    path: 'cadastar-usuario',
    component: CadastarUsuarioComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    // canActivate: [AuthGuard]
  }
  // {
  //     path: 'editar-notificacao/:id',
  //     component: EditarNotificacaoComponent,
  //     canActivate: [AuthGuard]
  // },
];

export const UsuarioRoute: ModuleWithProviders<any> = RouterModule.forChild(routes);
