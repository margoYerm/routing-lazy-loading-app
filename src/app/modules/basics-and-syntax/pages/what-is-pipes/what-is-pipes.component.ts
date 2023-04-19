import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'what-is-pipes',
  templateUrl: './what-is-pipes.component.html',
  styles: [`
    .pipe-item {
      margin-bottom: 15px;
    }
  `],
})
export class WhatIsPipesComponent {

  now: Date = new Date();

  constructor() { }
  
}
