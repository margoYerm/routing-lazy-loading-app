import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-strings',
  templateUrl: './pipes-strings.component.html',
  styleUrls: ['./pipes-strings.component.scss']
})
export class PipesStringsComponent implements OnInit {

  str = 'hello world!';

  constructor() { }

  ngOnInit() {
  }

}
