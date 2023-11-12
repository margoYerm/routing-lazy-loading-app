import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';



@Component({
  selector: 'dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {      

  modal = false;  

  constructor(
    private modalService: ModalService,    
  ) { }

  ngOnInit() {
  }  

  openModal(modalTemplate: TemplateRef<any>) {    
    this.modalService
    .open(modalTemplate, {size: 'lg', title: 'Foo Edited'})    
    .subscribe(action => {
     console.log('modalAction', action);
    });
  }

}
