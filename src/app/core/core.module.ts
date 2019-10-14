import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HeaderModule } from 'src/app/core/header/header.module';
import { NavIndicatorModule } from 'src/app/core/nav-indicator/nav-indicator.module';
import { NavMenuModule } from 'src/app/core/nav-menu/nav-menu.module';
import { BackgroundComponent } from 'src/app/core/background/background.component';
import { PagesModule } from 'src/app/pages/pages.module';
import { ScrollDetectionService } from 'src/app/core/scroll-detection.service';

const EXPORTS = [
  BrowserModule,
  RouterModule,
];

const COMPONENTS = [
  // HeaderComponent,
  BackgroundComponent,
];

const FEATURE_MODULES = [
  NavMenuModule,
  PagesModule,
  NavIndicatorModule,
  HeaderModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...EXPORTS,
    ...FEATURE_MODULES,
  ],
  exports: [
    ...EXPORTS,
    ...COMPONENTS,
    ...FEATURE_MODULES,
  ],
  providers: [
    ScrollDetectionService,
  ],
})
export class CoreModule { }
