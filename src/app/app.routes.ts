import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CadastarUsuarioComponent} from './view/usuario/cadastar-usuario/cadastar-usuario.component';
import {EditarUsuarioComponent} from './view/usuario/editar-usuario/editar-usuario.component';
import {CadastrarCorretoraComponent} from './view/corretora/cadastrar-corretora/cadastrar-corretora.component';
import {CadastrarAtivoComponent} from './view/ativo/cadastrar-ativo/cadastrar-ativo.component';
import {CadastrarCarteiraComponent} from './view/carteira/cadastrar-carteira/cadastrar-carteira.component';
// import { DiarioErrosComponent } from './diario-erros/diario-erros.component';
// import { AuthGuard, LoginSuccessComponent } from '@nuvem/angular-base';
// import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";

export const routes: Routes = [
  {path: 'cadastrar-usuario', component: CadastarUsuarioComponent},
  {path: 'cadastrar-corretora', component: CadastrarCorretoraComponent},
  {path: 'cadastrar-carteira', component: CadastrarCarteiraComponent},
  {path: 'cadastrar-ativo', component: CadastrarAtivoComponent},
  {path: 'editar-usuario/1', component: EditarUsuarioComponent},
  // {path: 'editar-corretora/1', component: EditarCorretoraComponent},
  // {path: 'diario-erros', component: DiarioErrosComponent},
  // {path: 'login-success', component: LoginSuccessComponent},
  // {path: '', component: PaginaInicialComponent, canActivate: [AuthGuard]}
];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes);
