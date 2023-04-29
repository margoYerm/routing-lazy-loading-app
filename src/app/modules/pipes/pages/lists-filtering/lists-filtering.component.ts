import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  [field: string]: string;
}

@Component({
  selector: 'lists-filtering',
  templateUrl: './lists-filtering.component.html',
  styleUrls: ['./lists-filtering.component.scss']
})
export class ListsFilteringComponent implements OnInit {

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {
      title: 'Angular',
      text: 'The web development framework for building the future'
    },
    {
      title: 'Vue',
      text: 'An approachable, performant and versatile framework for building web user interfaces.'
    },
    {
      title: 'React',
      text: 'The library for web and native user interfaces',
    },
    {
      title: 'Svetle',
      text: 'Cybernetically enhanced web apps'
    },
    {
      title: 'Ember',
      text: 'A framework for ambitious web developers.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    this.posts.push({
      title: 'jQuery',
      text: 'Write less, do more. JQuery is is the oldest front-end library'
    })
  }

}
