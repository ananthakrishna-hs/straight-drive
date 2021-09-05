import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";

import { DataHandlerService } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class ActivationGuard implements CanActivate {
  constructor(
    private dataHandler: DataHandlerService,
    private router: Router
  ) {}

  /**
   * To guard /success route via activation status.
   * @returns {true | UrlTree} True if success else route to landing
   */
  canActivate(): true | UrlTree {
    if (this.dataHandler.isActivated()) {
      return true;
    }
    return this.router.parseUrl('/');
  }
}