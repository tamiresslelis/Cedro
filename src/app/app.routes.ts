import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {FormComponent} from './form/form.component'
import { PerguntasComponent } from './form/perguntas/perguntas.component';
import { PerguntaComponent } from './form/perguntas/pergunta/pergunta.component';
export const ROUTES: Routes =[
  {path:'', component:HomeComponent},
  {path:'form', component:FormComponent},
  {path:'perguntas', component:PerguntasComponent},
  {path:'perguntas/:id', component:PerguntaComponent},
]
