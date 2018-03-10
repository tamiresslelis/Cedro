import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit() {
  }
  termo: boolean = false;
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  }

}
