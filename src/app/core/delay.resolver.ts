import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
/**
 * Delays components from route changes, so page tranistion outs have time to complete.
 */
export class DelayResolver implements Resolve<Promise<boolean>> {

  static readonly ROUTE_DELAY = 1000;

  sTimeout: NodeJS.Timer;

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, DelayResolver.ROUTE_DELAY);
    });

    return promise;
  }

}
