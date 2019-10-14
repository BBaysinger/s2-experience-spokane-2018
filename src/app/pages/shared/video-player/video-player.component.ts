import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 's2es-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

}
