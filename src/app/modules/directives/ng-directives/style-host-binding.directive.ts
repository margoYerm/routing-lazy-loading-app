import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyleHostBinding]'
})

export class StyleHostBindingDirective {

    @Input('appStyleHostBinding') color: string = 'darkblue';
    
    @HostBinding('style.color') elColor: any = null;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {}

    @HostListener('click', ['$event']) //['$event.target']
    onClick(event: Event) {
        console.log(event);
    }

    @HostListener('mouseenter') //['$event']
    onEnter() {        
        this.elColor = this.color
    }

    @HostListener('mouseleave')
    onLeave() {        
        this.elColor = null;
    }
}