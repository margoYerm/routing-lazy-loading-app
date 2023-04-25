import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number,
}

@Component({
  selector: 'interaction-of-components',
  templateUrl: './interaction-of-components.component.html',
  styleUrls: ['./interaction-of-components.component.scss']
})
export class InteractionOfComponentsComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'Learning Angular components',
      text: 'Create a post in dependency component and send him to another component',
      id: 22,
    },
    {
      title: 'Add one shared component',
      text: 'Using best structure for the project, learn best practices',
      id: 78,
    },
    {
      title: 'ng-content',
      text: 'Show text', 
      id: 88     
    },
  ];

  constructor() { }

  ngOnInit() {  }

  updatePosts(post: Post) {    
    this.posts.unshift(post);
    //console.log('Post', post);
  }

  removePost(id: number) {
    console.log('id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }

}
