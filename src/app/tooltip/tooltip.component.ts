import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @Input() tip: string;
  @Input() displayTip: boolean;

  bottomTip:boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollNum:number = document.getElementById('toolTip').offsetTop;
    if(window.top.scrollY > scrollNum){
      this.switchToolTipToBottom();
    }
    else{
      this.switchToolTipToTop();
    }

  }

  constructor() {
  }

  switchToolTipToBottom(){
    this.bottomTip = true;
  }

  switchToolTipToTop(){
    console.log("switching to top");
    this.bottomTip = false;
  }

}
