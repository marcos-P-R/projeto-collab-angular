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
import { FooterComponent } from './components/template/footer/footer.component';
import { CadastroComponent } from './components/account/cadastro/cadastro.component';
import { HomeComponent } from './components/views/home/home.component';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';




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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
