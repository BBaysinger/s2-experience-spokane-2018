import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { NavIndicatorComponent } from 'src/app/core/nav-indicator/nav-indicator.component';
import { NavIndicatorTickComponent } from 'src/app/core/nav-indicator/nav-indicator-tick/nav-indicator-tick.component';

const COMPONENTS = [
  NavIndicatorComponent,
  NavIndicatorTickComponent,
];

const EXPORTS = [

];

/**
 *
 *
 * @export
 * @class NavIndicatorModule
 */
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...EXPORTS,
    SharedModule,
  ],
  exports: [
    ...EXPORTS,
    ...COMPONENTS,
  ],
  providers: [],
})
export class NavIndicatorModule { }
