import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.hover = 'yellow';
   }

}
