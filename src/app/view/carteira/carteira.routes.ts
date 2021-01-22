import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CadastrarCarteiraComponent} from './cadastrar-carteira/cadastrar-carteira.component';


export const routes: Routes = [
  {
    path: 'cadastar-carteira',
    component: CadastrarCarteiraComponent,
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

export const CarteiraRoute: ModuleWithProviders<any> = RouterModule.forChild(routes);
