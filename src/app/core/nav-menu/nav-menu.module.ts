import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NavMenuComponent } from 'src/app/core/nav-menu/nav-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  NavMenuComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    CollapseModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class NavMenuModule { }
