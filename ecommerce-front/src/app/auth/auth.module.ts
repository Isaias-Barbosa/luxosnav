import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // ✅ Aqui está o segredo
    AuthRoutingModule,
    LoginComponent // ✅ importado, não declarado

  
  ]
})

export class AuthModule { }
