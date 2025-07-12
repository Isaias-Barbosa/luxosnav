import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class ProductCardComponent {
  @Input() produto!: Product;
}