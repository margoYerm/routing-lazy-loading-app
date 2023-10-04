import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {  

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  goToFirstPage() {
    this.router.navigate(['']);
  }

}
