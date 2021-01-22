import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CadastrarCorretoraComponent} from './cadastrar-corretora/cadastrar-corretora.component';


export const routes: Routes = [
  {
    path: 'cadastar-corretora',
    component: CadastrarCorretoraComponent,
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

export const CorretoraRoute: ModuleWithProviders<any> = RouterModule.forChild(routes);
