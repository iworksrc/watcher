import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {FocusMonitor} from "@angular/cdk/a11y";

@Directive({
  selector: 'button[appItButton]'
})
export class ItButtonDirective implements OnChanges {

  @Input()
  permanentColor?: string;

  @Input()
  permanentBackground?: string;

  constructor(
    private elementRef: ElementRef
    ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.permanentColor) {
      this.elementRef.nativeElement.style.color = this.permanentColor;
    }

    if (this.permanentBackground) {
      this.elementRef.nativeElement.style.background = this.permanentBackground;
    }
  }
}
