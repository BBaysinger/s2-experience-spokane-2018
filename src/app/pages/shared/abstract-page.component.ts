import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PageService } from 'src/app/pages/shared/page.service';

/**
 *
 *
 * @export
 * @class AbstractPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 's2es-abstract-page',
  template: ``,
})
export class AbstractPageComponent implements OnInit {

  /**
   * Animations
   *
   * @memberof AbstractPageComponent
   */
  buildInReady = false;

  /**
   *Creates an instance of AbstractPageComponent.
   * @param {PageService} pageService
   * @memberof AbstractPageComponent
   */
  constructor(
    pageService: PageService,
  ) { }

  /**
   *
   *
   * @memberof AbstractPageComponent
   */
  ngOnInit() { }
}
