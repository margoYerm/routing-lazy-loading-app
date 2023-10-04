
import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';


export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().then( isAuth => {
    if (isAuth) {      
      console.log('Auth guard');
      return true;
    } else {
      return router.navigate(['/my-routing/home'], {
        queryParams: {
          auth: false
        }
      })
    }
  })
}

export const AuthGuardChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
) => {      
      console.log('CanActivatedChildFn works!!!')
      return AuthGuard(route, state);
    };

