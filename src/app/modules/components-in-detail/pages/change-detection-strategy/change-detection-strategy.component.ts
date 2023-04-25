import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss']
})
export class ChangeDetectionStrategyComponent implements OnInit {  

  fruits = ['Mango', 'Orange', 'Pineapple', 'Pear'];
  newFruit = '';

  constructor() { }

  ngOnInit() {
  }

  addFruit() {
    const str = this.newFruit.trim();
    if (str.length > 0) {      
      //this.fruits.push(str);
      this.fruits = [...this.fruits, str]
      console.log(this.fruits);
      this.newFruit = '';
    }    
  }

}
