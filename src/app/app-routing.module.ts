import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './components/template/entrada/entrada.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [
  {
    path:'',
    component:EntradaComponent
  },
  {
    path:'views/cadastro',
    component:CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
