import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {

    color: string = 'darkblue';
    fontWeight = '700';

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {
        console.log(elRef);
        //elRef.nativeElement.style.color = this.color;        
        //the below method is more correct
        //this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', '700');
    }

    @HostListener('click', ['$event.target']) //['$event']
    onClick(event: Event) {
        console.log(event);        
    }

    @HostListener('mouseenter') //['$event']
    onEnter() {
        this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '20px');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
        this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);
    }

    @HostListener('mouseleave')
    onLeave() {
        this.renderer.setStyle(this.elRef.nativeElement, 'font-size', null);
        this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
        this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    }
}