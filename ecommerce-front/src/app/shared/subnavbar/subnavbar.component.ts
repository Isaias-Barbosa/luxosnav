import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { categoriesMenu } from '../data/categories-menu';

@Component({
  selector: 'app-subnavbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './subnavbar.component.html',
  styleUrl: './subnavbar.component.scss',
})

export class SubnavbarComponent  {
  constructor(public authService: AuthService) {}

  menuOpen = false;
  activeCategory: string | null = null;
  categories = categoriesMenu;
  menuColecoesAberto = false;
  fechamentoAtrasado: any;


  toggleCategory(name: string) {
    this.activeCategory = this.activeCategory === name ? null : name;
  }


abrirMenuColecoes() {
  clearTimeout(this.fechamentoAtrasado);
  this.menuColecoesAberto = true;
}

fecharMenuColecoes() {
  this.fechamentoAtrasado = setTimeout(() => {
    this.menuColecoesAberto = false;
  }, 100); // Tempo de tolerância
}


}
