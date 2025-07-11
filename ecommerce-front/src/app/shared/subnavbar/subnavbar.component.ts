import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrl: './subnavbar.component.scss'
})
export class SubnavbarComponent {
 constructor(public authService: AuthService) {}

}
