import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';
import { CanvasAnimation } from 'src/app/pages/shared/util-canvasAnimation';
import { AnimPaddler } from './anim-paddler';
import { PageService } from 'src/app/pages/shared/page.service';
import { VideoPlayerComponent } from 'src/app/pages/shared/video-player/video-player.component';

/**
 *
 *
 * 
 * @export
 * @class ContestPageComponent
 * @extends {AbstractPageComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 's2es-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: [
    './contest-page.component.sass',
    './contest-page.animations.sass',
    '../shared/all-pages.sass',
    '../shared/all-pages-animations.sass']
})
export class ContestPageComponent extends AbstractPageComponent implements OnInit {

  bsModalRef: BsModalRef;

  @ViewChild('animCanvas') canvas: ElementRef;
  @ViewChild('animCanvasWrapper') canvasWrapper: ElementRef;

  constructor(
    private readonly pageService: PageService,
    private readonly modalService: BsModalService
  ) {
    super(pageService);
  }

  /**
   *
   *
   * @memberof ContestPageComponent
   */
  playVideo() {
    this.openVideoModal();
  }

  /**
   *
   *
   * @memberof ContestPageComponent
   */
  openVideoModal() {
    const initialState = {
      // title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(VideoPlayerComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  /**
   *
   *
   * @memberof EnterPageComponent
   */
  ngAfterViewInit() {

    // TODO: This needs to be started with runOutsideAngular!!!
    const test = new CanvasAnimation({
      canvas: this.canvas.nativeElement,
      wrapper: this.canvasWrapper.nativeElement,
      animClass: AnimPaddler,
      exportRootName: 'experienceSpokane_paddleboarder',
      scaleToWidth: true,
    });
  }
}
