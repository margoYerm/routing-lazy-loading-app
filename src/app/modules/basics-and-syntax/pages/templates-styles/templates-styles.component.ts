import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templates-styles',
  template: `
    <h2 class="h2">Component consists only of .ts file</h2>
    <p>Learn Angular after remind TypeScript. 
    Vladilen Minin curses from Udemy, Patterns and Styles</p> 
  `,
  styles: [`p {
    padding: 5px;
    border: 1px dotted green;
  }`]  
})

export class TemplatesStylesComponent {}
