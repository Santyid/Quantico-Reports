import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const generalAuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isGeneralAuthenticated) {
    return true;
  }
  return router.createUrlTree(['/login']);
};

export const clientAuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isClientAuthenticated) {
    return true;
  }
  return router.createUrlTree(['/cliente/login']);
};
