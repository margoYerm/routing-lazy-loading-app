import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {  

  data = 0;
  public showChild = true; //demo ngOnDestroy

  constructor() { }  

  ngOnInit() {    
    console.log('ngOnInit in parent component');
  }

  changeFromParent(){
    this.data += 1;
  }

  //demo ngDestroy
  updateDestroy() {
    this.showChild = !this.showChild;
  }
 
}
