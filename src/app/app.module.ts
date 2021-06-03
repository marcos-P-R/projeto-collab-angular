import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EntradaComponent } from './components/template/entrada/entrada.component';
import { LoginComponent } from './components/account/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { FooterComponent } from './components/template/footer/footer.component';
import { CadastroComponent } from './components/account/cadastro/cadastro.component';
import { HomeComponent } from './components/views/home/home.component';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';
import { HeaderUserComponent } from './components/template/header-user/header-user.component';
import { InitialTelaUserComponent } from './components/template/initial-tela-user/initial-tela-user.component';
import { ProjectTelaUserComponent } from './components/template/project-tela-user/project-tela-user.component';
import { CreationTelaUserComponent } from './components/template/creation-tela-user/creation-tela-user.component';
import { PerfilTelaUserComponent } from './components/template/perfil-tela-user/perfil-tela-user.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntradaComponent,
    LoginComponent,
    FooterComponent,
    CadastroComponent,
    HomeComponent,
    AuthenticationComponent,
    HeaderUserComponent,
    InitialTelaUserComponent,
    ProjectTelaUserComponent,
    CreationTelaUserComponent,
    PerfilTelaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
