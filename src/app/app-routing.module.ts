import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/account/login/login.component';
import { CadastroComponent } from './components/account/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './components/template/entrada/entrada.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:EntradaComponent
      },
      {
        path:'account/login',
        component:LoginComponent
      },
      {
        path:'account/cadastro',
        component:CadastroComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
