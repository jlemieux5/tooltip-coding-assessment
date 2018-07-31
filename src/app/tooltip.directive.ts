import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})

// Simple Tooltip Directive that takes a tip for the text of the tooltip and a display boolean to toggle display of the tooltip
export class TooltipDirective {
  @Input('appTooltip') tip: string;
  @Input() displayTip: boolean = false;

  //Switches the tooltip location depending on scroll length
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollNum:number = this.tooltipEl.nativeElement.offsetTop;
    if(window.top.scrollY > scrollNum){
      this.switchToolTipToBottom();
    }
    else{
      this.switchToolTipToTop();
    }

  }

  constructor(private tooltipEl: ElementRef) {
  }

  ngOnChanges(){
    if(this.displayTip){
      this.showTip();
    }
    else{
      this.hideTip();
    }
  }

  showTip(){
    this.tooltipEl.nativeElement.classList.add("tool-tip");
    this.tooltipEl.nativeElement.setAttribute('data-tip', this.tip);
  }

  hideTip(){
    this.tooltipEl.nativeElement.classList.remove("tool-tip");
  }

  switchToolTipToBottom(){
    this.tooltipEl.nativeElement.classList.add("bottom");
  }

  switchToolTipToTop(){
    this.tooltipEl.nativeElement.classList.remove("bottom");
  }

}
