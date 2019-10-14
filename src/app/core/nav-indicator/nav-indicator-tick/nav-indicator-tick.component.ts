import { Component, Input } from '@angular/core';

@Component({
  selector: 's2es-nav-indicator-tick',
  templateUrl: './nav-indicator-tick.component.html',
  styleUrls: ['./nav-indicator-tick.component.sass']
})
export class NavIndicatorTickComponent {

  @Input() path: string;

  constructor () {

  }

}
