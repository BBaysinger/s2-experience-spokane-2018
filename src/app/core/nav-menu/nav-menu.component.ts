import { Component, HostListener } from '@angular/core';

@Component({
  selector: 's2es-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.sass', './nav-menu.animations.sass']
})
/**
 *
 */
export class NavMenuComponent {

  isCollapsed = true;
  buildIn = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.isCollapsed = true;
      this.buildIn = true;
    }
  }

  /*
  * Not sure why this timeout is needed. Probably something internal to ngx-bootstrap.
   */
  toggle() {
    this.isCollapsed = !this.isCollapsed;

    setTimeout(() => {
      this.buildIn = !this.buildIn;
    }, 1);
  }

}
