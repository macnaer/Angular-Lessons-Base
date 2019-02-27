import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[appBackground]"
})

export class BackgroundDirective implements OnInit{
    constructor(private element: ElementRef, private render: Renderer2){}
    @Input() hoverColor : string = "pink";
    @Input() defaultBG : string = "blue";
    ngOnInit(){
        this.render.setStyle(this.element.nativeElement, 'background-color', this.defaultBG);
        this.render.addClass(this.element.nativeElement, 'text');
       // this.element.nativeElement.style.backgroundColor = "blue";
    }

   /* @HostListener('mouseenter', ['$event']) MouseEnter(event: Event){
        console.log(event);
    }*/
    
    @HostListener('mouseenter') MouseEnter() {
        this.render.setStyle(this.element.nativeElement, 'background-color', this.hoverColor);
        this.render.addClass(this.element.nativeElement, 'test');
    }

    @HostListener('mouseleave') MouseLeave() {
        this.render.setStyle(this.element.nativeElement, 'background-color', this.defaultBG);
        this.render.removeClass(this.element.nativeElement, 'test');
    }
}