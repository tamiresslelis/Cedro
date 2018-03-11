import { Component, OnInit } from '@angular/core';

import { Pergunta } from '../perguntas/pergunta.model'
import { PerguntasService } from '../perguntas.service'

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntasComponent implements OnInit {

  perguntas: Pergunta[]

  constructor(private perguntasService: PerguntasService) { }
 //ass
  ngOnInit() {
    this.perguntas = this.perguntasService.perguntas().subscribe((perguntas: Pergunta[]) => this.perguntas = perguntas);
  }

}
