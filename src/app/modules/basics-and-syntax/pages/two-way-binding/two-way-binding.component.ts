import { Component, } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {

  title = 'Initial';

  constructor() { }
  
  // onInput(event: any) {
  //   this.title = event.target.value
  // }
  
  onInput(event: any) {    
    this.title = (<HTMLInputElement>event.target).value
  }
}
