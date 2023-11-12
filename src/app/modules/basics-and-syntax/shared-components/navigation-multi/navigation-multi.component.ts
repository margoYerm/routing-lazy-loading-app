import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(
    private title: Title,
    private meta: Meta
  ) { 
    //let t = title.getTitle();
    //console.log('t =', t);  
    //this.title.setTitle('fghv') 
    this.meta.addTags([
      {name: 'keywords', content: 'angular, google, meta-tags'}, 
      {name: 'description', 
        content: 'First learning big project with cours on udemy'}
    ])
  }

  ngOnInit() {
  }  

      
}
