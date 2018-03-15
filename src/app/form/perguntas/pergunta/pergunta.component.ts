import { Component, OnInit, Input  } from '@angular/core';
import { Pergunta } from '../pergunta.model'
@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  @Input() pergunta:Pergunta
  constructor() { }

  ngOnInit() {
  }

}
