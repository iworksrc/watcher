import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {FocusMonitor} from "@angular/cdk/a11y";

@Directive({
  selector: 'button[appItButton]'
})
export class ItButtonDirective implements OnInit {

  @Input() permanentColor!: string;

  constructor(
    private elementRef: ElementRef
    ) {
  }

  ngOnInit(): void {
    if (this.permanentColor) {
      this.elementRef.nativeElement.style.color = this.permanentColor;
    }
  }

}
