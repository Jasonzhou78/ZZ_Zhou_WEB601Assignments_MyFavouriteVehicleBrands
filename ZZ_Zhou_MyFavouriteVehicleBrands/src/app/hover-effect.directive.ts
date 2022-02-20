import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core'; 
@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  constructor(private el:ElementRef) { 

   }
   
   @HostListener('mouseover')
   onMouseOver() {
    
    let tag = this.el.nativeElement.tagName;
    if (tag.toLowerCase() == 'div')
    this.el.nativeElement.style.textDecoration = 'underline';
    else if(tag.toLowerCase() == 'span')
    this.el.nativeElement.style.fontWeight = 'bold'; 
   }
 
   @HostListener('mouseout')
   onMouseOut() {
    if (this.el.nativeElement.tagName.toLowerCase() == 'div')
    this.el.nativeElement.style.textDecoration =  '';
    else if(this.el.nativeElement.tagName.toLowerCase() == 'span')
    this.el.nativeElement.style.fontWeight = 'normal';
   }

}
