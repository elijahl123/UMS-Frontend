import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../components/features/auth/auth.service';

interface VerifyToken {
  verifyToken: {
    payload: {
      email: string
      exp: number
      origIat: number
    }
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.getToken()) {
      this.router.navigate(['/auth', 'login']);
      return false;
    }
    return new Promise((resolve, reject) => {
      this.authService.verifyToken(this.authService.getToken() || '')
        .subscribe(({ data }) => {
          if (data) {
            if (data.verifyToken) {
              resolve(true);
            }
          } else {
            this.router.navigate(['/auth', 'login']);
            resolve(false);
          }
        });
    });
  }

}
