import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PerguntasComponent } from './form/perguntas/perguntas.component';
import { PerguntasService } from './form/perguntas.service';
import { PerguntaComponent } from './form/perguntas/pergunta/pergunta.component';
import { OpcaoComponent } from './form/perguntas/pergunta/opcao/opcao.component';
import { ConfirmaCadastroComponent } from './confirma-cadastro/confirma-cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    PerguntasComponent,
    PerguntaComponent,
    OpcaoComponent,
    ConfirmaCadastroComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ModalModule.forRoot()
  ],
  providers: [PerguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
