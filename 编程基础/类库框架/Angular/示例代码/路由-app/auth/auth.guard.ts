import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('AuthGuard', state.url);
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    console.log('ChildAuthGuard', state.url);
    return true;
  }

  canDeactivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    console.log('canDeactivate', state.url);
    return true;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    console.log('resolve', state.url);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'zkb'
        });
      }, 2000)
    });
  }

  canLoad() {
    console.log('canLoad')
    return true
  }
}