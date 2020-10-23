import { Component } from '@angular/core';

import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';

import { PageService } from 'src/app/pages/shared/page.service';

/**
 *
 *
 * @export
 * @class AboutPageComponent
 * @extends {AbstractPageComponent}
 */
@Component({
  selector: 's2es-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: [
    './about-page.component.sass',
    '../shared/all-pages.sass',
    '../shared/all-pages-animations.sass',
    './about-page.animations.sass']
})
export class AboutPageComponent extends AbstractPageComponent {

  /**
   * Creates an instance of AboutPageComponent.
   *
   * @param {PageService} pageService
   * @memberof AboutPageComponent
   */
  constructor(readonly pageService: PageService) {
    super(pageService);
  }

}
