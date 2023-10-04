import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds = false;

  constructor(
    protected postsService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.showIds = !!params['showIds']
      }
    )

    this.route.fragment.subscribe( fragment => {
      console.log('Fragment', fragment)
    })
  }

  showIdsProgram() {
    this.router.navigate(['/my-routing/posts'], {
      queryParams: {
        showIds: true
      },
      fragment: 'program-fragment'
    })
  }

}
