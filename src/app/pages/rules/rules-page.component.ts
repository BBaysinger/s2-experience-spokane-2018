import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';

import { CanvasAnimation } from 'src/app/pages/shared/util-canvasAnimation';
import { AnimHill } from './anim-hill';

import { PageService } from 'src/app/pages/shared/page.service';

@Component({
  selector: 's2es-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: [
    './rules-page.component.sass',
    './rules-page.animations.sass',
    '../shared/all-pages.sass',
    '../shared/all-pages-animations.sass']
})
export class RulesPageComponent extends AbstractPageComponent implements OnInit {

  @ViewChild('animCanvas') canvas: ElementRef;
  @ViewChild('animCanvasWrapper') canvasWrapper: ElementRef;

  constructor(readonly pageService: PageService) {
    super(pageService);
  } /**
  *
  */
 ngOnInit() {

   super.ngOnInit();

   // TODO: This needs to be started with runOutsideAngular!!!
   const test = new CanvasAnimation({
     canvas: this.canvas.nativeElement,
     wrapper: this.canvasWrapper.nativeElement,
     animClass: AnimHill,
     exportRootName: 'experienceSpokane_nature',
     scaleToWidth: true,
   });

 }

}
