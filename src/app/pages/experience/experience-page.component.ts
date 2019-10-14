import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';

import { CanvasAnimation } from 'src/app/pages/shared/util-canvasAnimation';
import { AnimCity } from './anim-city';

import { PageService } from 'src/app/pages/shared/page.service';

@Component({
  selector: 's2es-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: [
    './experience-page.component.sass',
    './experience-page.animations.sass',
    '../shared/all-pages.sass',
    '../shared/all-pages-animations.sass'
  ]
})
export class ExperiencePageComponent extends AbstractPageComponent implements OnInit {

  dummyArray: any[] = [];

  @ViewChild('animCanvas') canvas: ElementRef;
  @ViewChild('animCanvasWrapper') canvasWrapper: ElementRef;

  constructor(readonly pageService: PageService) {
    super(pageService);
  }

  /**
   *
   */
  ngOnInit() {

    super.ngOnInit();

    for (let i = 0; i < 60; i++) {
      this.dummyArray.push(null);
    }

    // TODO: This needs to be started with runOutsideAngular!!!
    const test = new CanvasAnimation({
      canvas: this.canvas.nativeElement,
      wrapper: this.canvasWrapper.nativeElement,
      animClass: AnimCity,
      exportRootName: 'experienceSpokane_skyline',
      scaleToWidth: true,
    });

  }

  setTransitionDelay(num: number): string {
    return `${num}s`;
  }

  getImageURL(num: number): string {
    return `assets/images/temp/thumb_${num % 8}.png`;
  }

}
