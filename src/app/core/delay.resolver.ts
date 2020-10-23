import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Delays components from route changes, so page tranistion outs have time to complete.
 *
 * @export
 * @class DelayResolver
 * @implements {Resolve<Promise<boolean>>}
 */
@Injectable()

export class DelayResolver implements Resolve<Promise<boolean>> {

  /**
   *
   *
   * @static
   * @memberof DelayResolver
   */
  static readonly ROUTE_DELAY = 1000;

  /**
   *
   *
   * @type {NodeJS.Timer}
   * @memberof DelayResolver
   */
  sTimeout: NodeJS.Timer;

  /**
   * Creates an instance of DelayResolver.
   * @memberof DelayResolver
   */
  constructor() { }

  /**
   *
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Promise<boolean>}
   * @memberof DelayResolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, DelayResolver.ROUTE_DELAY);
    });

    return promise;
  }

}
