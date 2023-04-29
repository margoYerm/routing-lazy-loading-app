import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-date',
  templateUrl: './pipes-date.component.html',
  styleUrls: ['./pipes-date.component.scss']
})
export class PipesDateComponent implements OnInit {

  date: Date = new Date(); 

  constructor() { }

  ngOnInit() {
  }

}
