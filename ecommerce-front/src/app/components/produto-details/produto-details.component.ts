import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../models/product.models';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-produto-details',
   standalone: true,
    imports: [
      CommonModule,
          ReactiveFormsModule,
          RouterModule,
          NavbarComponent,
          SubnavbarComponent,
          FooterComponent
    ],
  templateUrl: './produto-details.component.html',
})
export class ProdutoDetailsComponent implements OnInit {
  product!: Product;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe((data) => {
      this.product = data;
      this.loading = false;
    });
  }
}