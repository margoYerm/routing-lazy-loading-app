import { Component } from '@angular/core';
import { ParentLogService } from '../../services-ng/parent-log.service';

@Component({
  selector: 'nested-services',
  templateUrl: './nested-services.component.html',
  styleUrls: ['./nested-services.component.scss'],
  providers: [ParentLogService]
})
export class NestedServicesComponent {
  constructor(
    protected comboServices: ParentLogService,
  ){}
}
