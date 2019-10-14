import { Injectable, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import lethargy from 'lethargy';

import { appRoutes } from 'src/app/core/app-routing.module';

@Injectable()
/**
 *
 */
export class ScrollDetectionService {

  static readonly INACTIVE_INCREMENT = 100;

  lethargy = new lethargy.Lethargy();

  elem: HTMLElement;
  parent: HTMLElement;
  routeSegment: string;
  inactiveTimeout: NodeJS.Timer;

  activeScrolling = false;

  boundFunc: EventListenerOrEventListenerObject;

  routeList: string[];

  constructor(private router: Router) {

    this.boundFunc = this.onScroll.bind(this);

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log(this.router.url);
      }
    });

    for (let i = 0; i < 200; i++) {
      // TODO: Capure routes names into array to facilitate Array.indexOf to capture the index.
      // this.routeList
    }
  }

  navigate(direction: number) {
    // console.log(direction);
  }

  onScroll(event: MouseWheelEvent) {

    const val = this.lethargy.check(event);

    console.log('test');

    if (val !== false) {

      console.log(val);

      if (this.inactiveTimeout) {
        clearTimeout(this.inactiveTimeout);
      }

      this.inactiveTimeout = setTimeout(() => {
        if (event.deltaY < 0) {
          if (this.parent.scrollTop === 0) {
            this.navigate(-1);
          }
        } else {
          // console.log(this.elem.scrollHeight, this.elem.scrollTop, this.parent.scrollTop, this.parent.offsetHeight);
          // console.log(this.parent.scrollTop, this.parent.offsetHeight, this.elem.scrollHeight);
          if (this.parent.scrollTop + this.parent.offsetHeight === this.elem.scrollHeight) {
            this.navigate(1);
          }
        }
        this.activeScrolling = false;

      }, ScrollDetectionService.INACTIVE_INCREMENT);

      this.activeScrolling = true;
    }
  }

  init(elem: HTMLElement, parent: HTMLElement) {

    if (elem) {
      elem.removeEventListener('wheel', this.boundFunc);
    }

    this.elem = elem;
    this.parent = parent;

    window.addEventListener('wheel', this.boundFunc);
  }
}
