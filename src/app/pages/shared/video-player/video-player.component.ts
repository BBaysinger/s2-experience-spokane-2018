import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

/**
 *
 *
 * @export
 * @class VideoPlayerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 's2es-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit {

  /**
   *
   *
   * @type {string}
   * @memberof VideoPlayerComponent
   */
  title: string;

  /**
   *
   *
   * @type {string}
   * @memberof VideoPlayerComponent
   */
  closeBtnName: string;

  /**
   *
   *
   * @type {any[]}
   * @memberof VideoPlayerComponent
   */
  list: any[] = [];

  /**
   * Creates an instance of VideoPlayerComponent.
   * @param {BsModalRef} bsModalRef
   * @memberof VideoPlayerComponent
   */
  constructor(public bsModalRef: BsModalRef) { }

  /**
   *
   *
   * @memberof VideoPlayerComponent
   */
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
