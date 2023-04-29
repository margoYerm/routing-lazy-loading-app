import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-numbers',
  templateUrl: './pipes-numbers.component.html',
  styleUrls: ['./pipes-numbers.component.scss']
})
export class PipesNumbersComponent implements OnInit {

  e: number = Math.E;

  constructor() { }

  ngOnInit() {
  }

}
