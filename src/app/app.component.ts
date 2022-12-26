import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Theme} from "./theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'watcher';
  isAlterTheme = false;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  opened = true;

  themePrimary = new Theme(124, 48, 47, 50, false, 'primary');
  themeAccent = new Theme(124, 48, 47, 50, false, 'accent');
  themeWarn = new Theme(124, 48, 47, 50, false, 'warn');

  themeAltPrimary = new Theme(206, 92.8, 43.5, 65, false, 'alt-primary');
  themeAltAccent = new Theme(21, 88.5, 62.5, 65, false, 'alt-accent');
  themeAltWarn = new Theme(353, 100, 50, 65, false, 'alt-warn');

  ngOnInit(): void {
    console.log(window.innerWidth);
    this.trackWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    this.trackWidth($event.target.innerWidth);
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  private trackWidth(width: number) {
    if (width < 768) {
      // this.sidenav.fixedTopGap = 64;
      this.opened = false;
    } else {
      // this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
  }
}
