import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../../services-ng/app-counter.service';

@Component({
  selector: 'services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.scss']
})
export class ServicesCreateComponent implements OnInit {

  constructor(
    protected appCounterService: AppCounterService
  ) { }

  ngOnInit() {
  }

}
