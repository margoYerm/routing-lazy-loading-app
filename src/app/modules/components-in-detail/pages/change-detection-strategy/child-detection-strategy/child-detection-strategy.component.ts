import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-detection-strategy',
  templateUrl: './child-detection-strategy.component.html',
  styleUrls: ['./child-detection-strategy.component.scss'],  
  changeDetection: ChangeDetectionStrategy.OnPush
  //changeDetection: ChangeDetectionStrategy.Default  
})

export class ChildDetectionStrategyComponent implements OnInit, OnChanges {

  @Input() fruits: string[];

  constructor(public ref: ChangeDetectorRef) {//
    console.log('Method ref in child component', ref);
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called in child component', changes);    
  }

}
