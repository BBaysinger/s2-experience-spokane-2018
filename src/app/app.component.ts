import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, NavigationStart } from '@angular/router';

// import { ScrollDetectionService } from 'core/scroll-detection.service';
import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';

@Component({
  selector: 's2es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @ViewChild('floatContainer') floatContainer: ElementRef;
  @ViewChild('floatContent') floatContent: ElementRef;

  backgroundClassName = '';
  // ==========
  // ANIMATIONS
  collapseShade = false;
  buildInReady = false;

  pageComponent: AbstractPageComponent;

  @ViewChild('pageShade') pageShade: ElementRef;

  constructor(
    private router: Router,
    // private scrollDetectionService: ScrollDetectionService,
  ) {

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        // Runs when navigation starts.

        // ==========
        // ANIMATIONS
        this.collapseShade = false;
        this.buildInReady = false;
      } else if (event instanceof NavigationEnd) {
        // Runs when navigation ends.
        const url = this.router.url;
        const segments = url.split('/');
        this.backgroundClassName = segments[segments.length - 1];

        // ==========
        // ANIMATIONS
        this.buildInReady = true;
        setTimeout(() => { this.collapseShade = true; }, 100);
      }
    });

  }

  onOutletActivate(componentRef: any) {
    this.pageComponent = componentRef;
    // ==========
    // PAGE ANIMATIONS
    // WAIT FOR SHADE TO COLLAPSE TO START PAGE CONTENT BUILD IN ANIMATIONS
    this.pageShade.nativeElement.addEventListener('transitionend', () => {
      // if (!this.buildInReady) {
      this.pageComponent.buildInReady = true;
      // }
    }, { once: true });
  }

  ngOnInit() {

    // https://stackoverflow.com/a/51274898/1253298
    const bodyScrollLevels: { [navigationId: number]: number } = {};
    const containerScrollLevels: { [navigationId: number]: number } = {};
    let lastId = 0;
    let restoredId: number;

    this.router.events.subscribe((event: RouterEvent) => {

      if (event instanceof NavigationStart) {
        bodyScrollLevels[lastId] = this.floatContainer.nativeElement.scrollTop;
        containerScrollLevels[lastId] = this.floatContainer.nativeElement.scrollTop;
        lastId = event.id;
        restoredId = event.restoredState ? event.restoredState.navigationId : undefined;
      }

      if (event instanceof NavigationEnd) {
        if (restoredId) {
          // Optional: Wrap a timeout around the next line to wait for
          // the component to finish loading
          document.body.scrollTo(0, bodyScrollLevels[restoredId] || 0);
          this.floatContainer.nativeElement.scrollTo(0, containerScrollLevels[restoredId] || 0);
        } else {
          document.body.scrollTo(0, 0);
          this.floatContainer.nativeElement.scrollTo(0, 0);
        }
      }

    });
  }

}
