import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-structural-directive',
  templateUrl: './create-structural-directive.component.html',
  styleUrls: ['./create-structural-directive.component.scss']
})
export class CreateStructuralDirectiveComponent implements OnInit {

  isVisible = true;
  isVisible2 = true;

  constructor() { }

  ngOnInit() {
  }

}
