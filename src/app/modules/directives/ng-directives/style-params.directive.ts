import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyleParams]'
})

export class StyleParamsDirective {

    @Input('appStyleParams') color: string = 'darkblue';
    @Input() dStyles: {
        border?: string,
        fontWeight?: string,
        borderRadius?: string
    };

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
        this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '20px');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
        this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
        this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
        this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    }

    @HostListener('mouseleave')
    onLeave() {
        this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', null);
        this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
        this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
        this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
        this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
    }
}