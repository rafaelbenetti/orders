import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isUserLoggedIn()
    ? true
    : inject(Router).createUrlTree(['/auth/signin']);
};
