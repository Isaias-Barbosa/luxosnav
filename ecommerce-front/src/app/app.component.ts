import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SubnavbarComponent } from './shared/subnavbar/subnavbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent
  ],

  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'ecommerce-front';
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
}

isLoginPage(): boolean {
    return this.router.url.includes('/auth/login');
  }
get username(): string {
  const user = this.authService.getUserInfo();
  return user?.nome || user?.sub || 'Usuário';
}



}