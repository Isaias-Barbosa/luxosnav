import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.models';
import { produtos } from '../../mocks/produtos.mock';

@Component({
  selector: 'app-section-luxo-elegancia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section-luxo-elegancia.component.html',
})
export class SectionLuxoEleganciaComponent {
  produtos: Product[] = produtos.filter(p => p.section === 'luxo-elegancia');
}
