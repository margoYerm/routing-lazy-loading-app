import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
//import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  

  constructor(
    private router: Router,    
  ) { }

  ngOnInit() {
  }

  goToPosts() {
    this.router.navigate(['my-routing/posts']);
  }

}
