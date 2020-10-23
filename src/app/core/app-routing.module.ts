import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestPageComponent } from 'src/app/pages/contest/contest-page.component';
import { RulesPageComponent } from 'src/app/pages/rules/rules-page.component';
import { ExperiencePageComponent } from 'src/app/pages/experience/experience-page.component';
import { EnterPageComponent } from 'src/app/pages/enter/enter-page.component';
import { AboutPageComponent } from 'src/app/pages/about/about-page.component';
import { DelayResolver } from 'src/app/core/delay.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'contest',
    pathMatch: 'full',
  },
  {
    path: 'contest',
    component: ContestPageComponent,
    pathMatch: 'full',
    resolve: { delay: DelayResolver },
  },
  {
    path: 'enter',
    component: EnterPageComponent,
    pathMatch: 'full',
    resolve: { delay: DelayResolver },
  },
  {
    path: 'rules',
    component: RulesPageComponent,
    pathMatch: 'full',
    resolve: { delay: DelayResolver },
  },
  {
    path: 'experience',
    component: ExperiencePageComponent,
    pathMatch: 'full',
    resolve: { delay: DelayResolver },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    pathMatch: 'full',
    resolve: { delay: DelayResolver },
  },
];

/**
 *
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [DelayResolver],
})
export class AppRoutingModule { }
