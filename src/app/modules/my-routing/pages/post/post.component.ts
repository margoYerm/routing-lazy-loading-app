import { ChangeDetectorRef, Component, OnInit, ViewRef, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostService } from '../../services/posts.service';
import { Subject, takeUntil } from 'rxjs';

const onDestroy = () => {
  const destroy$ = new Subject<void>();
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  viewRef.onDestroy(() => {
    destroy$.next();
    destroy$.complete();
  })

  return destroy$;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  postService = inject(PostService);
  page$ = inject(ActivatedRoute);
  destroy$ = onDestroy();

  post: Post;  
  paramsID: string;
  posts: Post[];
  nextPost: Post;

  buttonNext: boolean = false;

  constructor(
    //private route: ActivatedRoute,    
    //protected postService: PostService
    ) { }

  ngOnInit() {    
    //this.route.params.subscribe( (params: Params)
    this.page$.params
    .pipe(takeUntil(this.destroy$)) // protect from memory leaks 
    .subscribe( (params: Params) => {
      console.log('Params', params);      
      this.paramsID = params['id'];          
      this.post = this.postService.getById(this.paramsID)!;          
    })
  }  

  showNextPost() {    
    let postFromNext: Post = this.postService.nextPost(this.paramsID)!
    
    if (this.post.id !== postFromNext.id) {
      this.post = postFromNext
      this.paramsID = this.post.id
    } else {
      this.buttonNext = true;          
    } 
  }
}
