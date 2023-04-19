import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {

  title = 'Dynamic Title';

  number = 22;
  arr = [1, 1, 2, 3, 5, 8];

  obj = {
    a: 1,
    b: {
      c: 2,
    }
  }; 

}
