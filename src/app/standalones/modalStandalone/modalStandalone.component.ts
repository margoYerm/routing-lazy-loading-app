import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';


@Component({
  standalone: true,
  selector: 'modal-standalone',  
  templateUrl: './modalStandalone.component.html',
  styleUrls: ['./modalStandalone.component.scss'],  
  imports: [
    CommonModule,     
  ],
  encapsulation: ViewEncapsulation.None,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalStandaloneComponent {

  @Input() size? = 'md';
  @Input() title? = 'Modal title';

  @Output() closeEvent = new EventEmitter;
  @Output() submitEvent = new EventEmitter;

  constructor(
    private elementRef: ElementRef
  ) {}

  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit() {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
    
}
