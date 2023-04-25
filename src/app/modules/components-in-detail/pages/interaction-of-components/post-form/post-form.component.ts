import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../interaction-of-components.component';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  //on JS its mean onAdd2 = new EventEmitter() 

  @ViewChild('titleInput') inputRef: ElementRef;
  //@ViewChild('titleInput', {static: false}) 
  //key static: true using in ngOnInit

  title = '';
  text = '';

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      this.onAdd.emit(post);
      //method emit will send to ... data from brackets  
      //then needs create method in interaction component to accept this data 
      
      this.title = this.text = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

}
