import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-rest',
  templateUrl: './pipes-rest.component.html',
  styleUrls: ['./pipes-rest.component.scss']
})
export class PipesRestComponent implements OnInit {

  float: number = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4,
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
