import { Component, OnInit } from '@angular/core';

export interface NavCard {
  cardTitle: string,
  path: string
}

@Component({
  selector: 'navigation-multi',
  templateUrl: './navigation-multi.component.html',
  styleUrls: ['./navigation-multi.component.scss']
})

export class NavigationMultiComponent implements OnInit {

  navCards: NavCard[] = [
    {
      cardTitle: 'Templates and styles',
      path: 'templates-styles'
    },
    {
      cardTitle: 'Interpolation',
      path: 'interpolation'
    },
    {
      cardTitle: 'What is binding',
      path: 'what-is-binding'
    },
    {
      cardTitle: 'Event Binding',
      path: 'event-binding'
    },
    {
      cardTitle: 'Two Way Binding',
      path: 'two-way-binding'
    },
    {
      cardTitle: 'Directive ngStyle',
      path: 'ng-style'
    },
    {
      cardTitle: 'Dynamic classes ngClass',
      path: 'ng-class-dynamic-classes'
    },
    {
      cardTitle: 'Conditional display with ngIf else',
      path: 'ng-if-else'
    },
    {
      cardTitle: 'Directive ngSwitch',
      path: 'ng-switch'
    },
    {
      cardTitle: 'Loops with ngFor',
      path: 'ng-for-loops'
    },
    {
      cardTitle: 'What is pipes',
      path: 'what-is-pipes'
    },
  ]

  constructor() { }

  ngOnInit() {
  }  

}
