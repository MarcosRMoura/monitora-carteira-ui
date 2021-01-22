import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CadastrarAtivoComponent} from './cadastrar-ativo/cadastrar-ativo.component';


export const routes: Routes = [
  {
    path: 'cadastar-ativo',
    component: CadastrarAtivoComponent,
    // canActivate: [AuthGuard]
  }
  // ,
  // {
  //   path: 'editar-usuario/:id',
  //   component: EditarUsuarioComponent,
  //   // canActivate: [AuthGuard]
  // }
  // {
  //     path: 'editar-notificacao/:id',
  //     component: EditarNotificacaoComponent,
  //     canActivate: [AuthGuard]
  // },
];

export const AtivoRoute: ModuleWithProviders<any> = RouterModule.forChild(routes);
