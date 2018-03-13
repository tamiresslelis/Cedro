import { Component, OnInit } from '@angular/core';

import { Pergunta } from '../perguntas/pergunta.model'
import { PerguntasService } from '../perguntas.service'

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {


  perguntas: Pergunta[]
  constructor(private perguntasService: PerguntasService) { }
 //ass
  ngOnInit() {

    this.perguntasService
        .perguntas()
        .subscribe(perguntas =>{
          console.log(perguntas);
          this.perguntas = perguntas
        } );
}

}
