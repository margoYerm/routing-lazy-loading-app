import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-ng-model',
  templateUrl: './custom-ng-model.component.html',
  styleUrls: ['./custom-ng-model.component.scss']
})
export class CustomNgModelComponent implements OnInit {

  appState = 'off';

  constructor() { }

  ngOnInit() {
  }

  handleChange() {
    console.log('ngMedelChange:', this.appState)
  }

}
