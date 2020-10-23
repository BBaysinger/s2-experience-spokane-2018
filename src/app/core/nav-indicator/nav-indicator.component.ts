import { Component, OnInit } from '@angular/core';
import { Routes, Route } from '@angular/router';

import { appRoutes } from 'src/app/core/app-routing.module';

/**
 *
 *
 * @export
 * @class NavIndicatorComponent
 * @implements {OnInit}
 */
@Component({
  selector: 's2es-nav-indicator',
  templateUrl: './nav-indicator.component.html',
  styleUrls: ['./nav-indicator.component.sass']
})
export class NavIndicatorComponent implements OnInit {

  routes: Routes;

  constructor () {
    this.routes = appRoutes.filter((route: Route): boolean => {
      return !!route.component;
    });
  }

  /**
   *
   *
   * @memberof NavIndicatorComponent
   */
  ngOnInit() {

  }
}
