import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
standalone: true,
 imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
   menuOpen = false;
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