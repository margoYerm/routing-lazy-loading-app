import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})

export class ParentLogService {

  counter = 0;

  constructor(
    protected logService: LogService,
  ) { }

  increase(): void {
    this.logService.log('Increase counter');
    this.counter++;
  }

  decrease(): void {
    this.logService.log('Decrease counter');
    this.counter--;
  }
}
