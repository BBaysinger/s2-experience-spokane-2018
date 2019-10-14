import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PageService } from 'src/app/pages/shared/page.service';

@Component({
  selector: 's2es-abstract-page',
  template: ``,
})
export class AbstractPageComponent implements OnInit {

  // ==========
  // ANIMATIONS
  buildInReady = false;

  constructor(
    pageService: PageService,
  ) { }

  ngOnInit() { }
}
