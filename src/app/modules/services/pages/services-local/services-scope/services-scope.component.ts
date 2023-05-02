import { Component } from '@angular/core';
import { AppCounterService } from '../../../services-ng/app-counter.service';
import { LocalCounterService } from '../../../services-ng/local-counter.service';

@Component({
  selector: 'services-scope',
  templateUrl: './services-scope.component.html',
  styleUrls: ['./services-scope.component.scss'],
  providers: [LocalCounterService]
})
export class ServicesScopeComponent {
  constructor(
    protected appCounterServiceSS: AppCounterService,
    protected localCounterServiceSS: LocalCounterService
    ) {}

}
