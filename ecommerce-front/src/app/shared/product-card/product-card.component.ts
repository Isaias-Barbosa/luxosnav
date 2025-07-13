import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.models'; // interface opcional

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class ProductCardComponent {
  @Input() produto!: Product;
}