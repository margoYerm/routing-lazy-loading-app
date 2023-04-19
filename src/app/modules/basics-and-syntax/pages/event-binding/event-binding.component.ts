import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html', 
  styleUrls: ['./event-binding.component.scss'] 
})

export class EventBindingComponent {

  inputValue = ''; 

  constructor() { }

  onInput(event: any) {
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;    
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onClick() {
    console.log('Clicked button');
  }

}
