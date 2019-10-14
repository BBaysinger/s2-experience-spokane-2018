import { NgModule } from '@angular/core';

import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';
import { ContestPageComponent } from 'src/app/pages/contest/contest-page.component';
import { ExperiencePageComponent } from 'src/app/pages/experience/experience-page.component';
import { AboutPageComponent } from 'src/app/pages/about/about-page.component';
import { EnterPageComponent } from 'src/app/pages/enter/enter-page.component';
import { RulesPageComponent } from 'src/app/pages/rules/rules-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageService } from 'src/app/pages/shared/page.service';
import { HeaderModule } from 'src/app/core/header/header.module';
// Items that could be brought into specific pages if they each had a module.
import { VideoPlayerModule } from 'src/app/pages/shared/video-player/video-player.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const EXPORTS = [
];

const COMPONENTS = [
  AbstractPageComponent,
  ContestPageComponent,
  ExperiencePageComponent,
  AboutPageComponent,
  EnterPageComponent,
  RulesPageComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    HeaderModule,
    VideoPlayerModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    ...EXPORTS,
  ],
  exports: [
    ...EXPORTS,
    ...COMPONENTS,
  ],
  providers: [
    PageService,
  ]
})
export class PagesModule { }
