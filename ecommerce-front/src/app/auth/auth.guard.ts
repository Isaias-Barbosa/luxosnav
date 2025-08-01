import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
  if (this.authService.isAuthenticated() && !this.authService.isTokenExpired()) {
    return true;
  } else {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
    return false;
  }
}

}