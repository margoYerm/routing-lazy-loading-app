import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
  <p>This is child component for Lifecycle hooks</p>
  <a class="link" (click)="changeFromChild()">Change from child</a>
  <br/>
  <p>{{parentData}}</p>
  `,
  styles: []
})
export class ChildComponentComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() parentData: number;

  demoHooks = 'This is variable in child component, called in ngOnInit in child component';
  

  constructor() { 
    console.log('Constructor is called');
   }  
    
  ngOnChanges(changes: SimpleChanges): void { 
    console.log('ngOnChanges called in child component', changes);
  }

  ngOnInit() {
    this.funDemoHooks(this.demoHooks);
  }

  ngDoCheck(){
    console.log('ngDoCheck in child component');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called in child component');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called in child component');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called in child component');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called in child component');    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  //for demo ngOnChanges
  changeFromChild() {
    this.parentData -= 1;
  }  

  //for demo ngOnInit
  funDemoHooks(x: string): void {
    console.log(x);
  }  

}
