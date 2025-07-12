import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // ← resolve o erro do `formGroup`
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],

  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
  username: ['', Validators.required],
  senha: ['', Validators.required]
});

  }

onSubmit(): void {
  if (this.form.invalid) return;

  const credentials = this.form.value;
  this.authService.login(credentials).subscribe({
    next: () => this.router.navigate(['/produtos']),
    error: err => {
      console.error('Erro no login:', err);
      alert('Usuário ou senha inválidos');
    }
  });
}

}