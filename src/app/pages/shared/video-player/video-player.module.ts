import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngx-bootstrap/modal';

import { VideoPlayerComponent } from 'src/app/pages/shared/video-player/video-player.component';

const EXPORTS = [

];

const COMPONENTS = [
  VideoPlayerComponent,
];

/**
 *
 *
 * @export
 * @class VideoPlayerModule
 */
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    ...EXPORTS,
  ],
  exports: [
    ...EXPORTS,
    ...COMPONENTS,
  ],
  providers: [
  ],
  entryComponents: [
    VideoPlayerComponent,
  ]
})
export class VideoPlayerModule { }
