import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    'providedIn': 'root'
})

export class GuardService implements CanActivate {

  constructor() {}

  canActivate(): boolean {
    return true;
  }

}