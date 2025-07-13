import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.models';
import { produtos } from '../../mocks/produtos.mock';

@Component({
  selector: 'app-section-inverno',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section-inverno.component.html',
})
export class SectionInvernoComponent {
  produtos: Product[] = produtos.filter(p => p.section === 'inverno');
}