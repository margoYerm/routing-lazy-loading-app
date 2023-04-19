import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'what-is-binding',
  templateUrl: './what-is-binding.component.html',
  styleUrls: ['./what-is-binding.component.scss']
})
export class WhatIsBindingComponent {

  imgC = 'https://cdn.worldvectorlogo.com/logos/react-1.svg';

  img = 'https://cdn.worldvectorlogo.com/logos/react-1.svg';
  imgA = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';

  constructor() {
    
    setTimeout (
      () =>  {
        console.log('Second img was changed')
        this.img = this.imgA
      }, 5000
     ) 
  }  
}
