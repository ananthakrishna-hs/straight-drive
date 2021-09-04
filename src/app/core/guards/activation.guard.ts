import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { DataHandlerService } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class ActivationGuard implements CanActivate {
  constructor(
    private dataHandler: DataHandlerService,
    private router: Router
  ) {}

  canActivate() {
    if (this.dataHandler.isActivated()) {
      return true;
    }
    return this.router.parseUrl('/');
  }
}