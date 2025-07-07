import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token && !req.url.includes('/auth')) {
      if (this.authService.isTokenExpired()) {
        const refreshToken = this.authService.getRefreshToken();
        if (refreshToken) {
          return this.authService.refreshToken(refreshToken).pipe(
            switchMap(newToken => {
              this.authService.saveToken(newToken);
              const cloned = req.clone({
                setHeaders: { Authorization: `Bearer ${newToken}` }
              });
              return next.handle(cloned);
            }),
            catchError(() => {
              this.authService.logout();
              this.router.navigate(['/auth/login']);
              return throwError(() => new Error('Sessão expirada'));
            })
          );
        } else {
          this.authService.logout();
          this.router.navigate(['/auth/login']);
          return throwError(() => new Error('Refresh token ausente'));

        }
      }

      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
