import { Component, OnInit, Input } from '@angular/core';
import { Opcao } from './opcao.model'
@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.component.html',
  styleUrls: ['./opcao.component.css']
})
export class OpcaoComponent implements OnInit {

  @Input() opcao:Opcao
  constructor() { }
  ngOnInit() {
  }
}
