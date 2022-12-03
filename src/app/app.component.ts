import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

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
