import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = 'Title default';
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
