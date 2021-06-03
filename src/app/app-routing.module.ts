import { CreationTelaUserComponent } from './components/template/creation-tela-user/creation-tela-user.component';
import { ProjectTelaUserComponent } from './components/template/project-tela-user/project-tela-user.component';
import { PerfilTelaUserComponent } from './components/template/perfil-tela-user/perfil-tela-user.component';
import { InitialTelaUserComponent } from './components/template/initial-tela-user/initial-tela-user.component';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/account/login/login.component';
import { CadastroComponent } from './components/account/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './components/template/entrada/entrada.component';

const routes: Routes = [
  {
    path:'',
    component:AuthenticationComponent,
    children: [
      {path:'', component:EntradaComponent},
      {path:'account/login', component:LoginComponent},
      {path:'account/cadastro', component:CadastroComponent},
    ]
  },
  {
    path:'user',
    component:HomeComponent,
    children:[
      {path:'', component:InitialTelaUserComponent},
      {path:'perfil', component:PerfilTelaUserComponent},
      {path:'project', component:ProjectTelaUserComponent},
      {path:'creation', component:CreationTelaUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
