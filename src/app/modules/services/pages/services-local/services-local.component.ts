import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../../services-ng/app-counter.service';
import { LocalCounterService } from '../../services-ng/local-counter.service';

@Component({
  selector: 'services-local',
  templateUrl: './services-local.component.html',
  styleUrls: ['./services-local.component.scss'],
  providers: [LocalCounterService]
})
export class ServicesLocalComponent implements OnInit {

  constructor(
    protected appCounterDemo: AppCounterService,
    protected localCounterService: LocalCounterService
  ) { }

  ngOnInit() {
  }

}
