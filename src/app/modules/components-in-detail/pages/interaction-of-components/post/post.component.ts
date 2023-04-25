import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interaction-of-components.component';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() myPost: Post;
  @Input('anotherNameItem') item:string = 'Hi!';
  //we accept the variable with another name from parent (html) collection, 
  //but we want work with this variable in this component with name item
  //we using @Input arguments !!!!using seldom

  @Output() onRemove = new EventEmitter<number>();

  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() {  }
  
  ngOnInit() {
    console.log(this.infoRef.nativeElement);
  }

  removePost() {
    this.onRemove.emit(this.myPost.id);
  }
}
