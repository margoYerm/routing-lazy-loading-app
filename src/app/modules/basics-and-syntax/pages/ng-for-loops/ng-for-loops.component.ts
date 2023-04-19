import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-loops',
  templateUrl: './ng-for-loops.component.html',
  styleUrls: ['./ng-for-loops.component.scss']
})
export class NgForLoopsComponent {

  arr = [1, 1, 2, 3, 5, 8, 13, 21, 34];

  posts = [
    {
      title: 'Post 1', 
      author: 'Margo', 
      comments: [
        {name: 'Ihor', text: 'Comment text'},
        {name: 'July', text: 'Comment text second'},
        {name: 'Alex', text: 'Comment text third'},
      ]
    },
    {
      title: 'Post 2', 
      author: 'Margo Yerm', 
      comments: [
        {name: 'Ihor', text: 'Comment text'},
        {name: 'July', text: 'Comment text second'},
        {name: 'Alex', text: 'Comment text third'},
      ]
    },
    {
      title: 'Post 3', 
      author: 'Marharyta Yermachenko', 
      comments: [      
        {name: 'Mari', text: 'Bonjour à tous'},
        {name: 'Kirill', text: 'Comment ça va'},
        {name: 'Ilya', text: 'Bonne soirée.'},
      ]
    }
  ]


  constructor() { }

}
