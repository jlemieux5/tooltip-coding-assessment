import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  firstTip: string = "First Tip!";
  secondTip: string = "Second Tip!";
  displayFirstTip: boolean = false;
  displaySecondTip: boolean = false;

  // Listening for escape key or mouse click not on one of the buttons to close tooltips
  @HostListener('click', ['$event'])
  @HostListener('window:keyup', ['$event'])
  onEvent(event) {
    if (event.key === "Escape") {
      this.closeToolTips()
    }
    else if(event.target.nodeName !== "BUTTON"){
      this.closeToolTips();
    }
  }

  switchToFirstToolTip(){
    this.displayFirstTip = true;
    this.displaySecondTip = false;
  }

  switchToSecondToolTip(){
    this.displayFirstTip = false;
    this.displaySecondTip = true;
  }

  closeToolTips(){
    this.displayFirstTip = false;
    this.displaySecondTip = false;
  }
}
