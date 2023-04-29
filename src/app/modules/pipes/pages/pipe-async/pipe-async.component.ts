import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.scss']
})
export class PipeAsyncComponent implements OnInit {

  promise: Promise<string> = new Promise<string>(
    resolve => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 4000)
    }
  )

  date$: Observable<Date> = new Observable(obs => {
    setInterval( () => {
      obs.next(new Date());
    }, 1000)
  })

  dateClassic$: Observable<Date> = new Observable(obs => {
    setInterval( () => {
      obs.next(new Date());
    }, 1000)
  })

  date2: Date

  constructor() { }

  ngOnInit() {
    this.dateClassic$.subscribe(date => {
      this.date2 = date;
    })
  }

}
