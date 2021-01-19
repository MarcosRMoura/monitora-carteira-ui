import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CadastarUsuarioComponent} from './usuario/cadastar-usuario/cadastar-usuario.component';
import {EditarUsuarioComponent} from './usuario/editar-usuario/editar-usuario.component';
// import { DiarioErrosComponent } from './diario-erros/diario-erros.component';
// import { AuthGuard, LoginSuccessComponent } from '@nuvem/angular-base';
// import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";

export const routes: Routes = [
  {path: 'cadastrar-usuario', component: CadastarUsuarioComponent},
  {path: 'editar-usuario/1', component: EditarUsuarioComponent},
  // {path: 'diario-erros', component: DiarioErrosComponent},
  // {path: 'login-success', component: LoginSuccessComponent},
  // {path: '', component: PaginaInicialComponent, canActivate: [AuthGuard]}
];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes);
