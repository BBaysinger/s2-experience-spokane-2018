import { Component, OnInit } from '@angular/core';

import { PageService } from 'src/app/pages/shared/page.service';

/**
 * Though Angular really isn't inheritance-based, I used an abstract class just to keep things consistent
 * with a junior developer.
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
   * Creates an instance of AbstractPageComponent.
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
