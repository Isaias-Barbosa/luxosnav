import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  get username(): string {
    const user = this.authService.getUserInfo();
    return user?.nome || user?.sub || 'Usuário';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}