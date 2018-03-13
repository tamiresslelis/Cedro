import { Injectable } from '@angular/core';
import { Pergunta } from './perguntas/pergunta.model'
import { PerguntasComponent } from './perguntas/perguntas.component'
import { Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { MEAT_API} from '../app.api'


@Injectable()
export class PerguntasService{

  constructor(private http:Http){}

    perguntas(): Observable<Pergunta[]>{
      return this.http.get(`${MEAT_API}/perguntas`)
      .map( response => response.json())

    }
    //retorna uma pergunta só, por id
    perguntasById(id:string):Observable<Pergunta>{
       return this.http.get(`${MEAT_API}/perguntas/${id}`)
       .map( response => response.json())

     }


}
