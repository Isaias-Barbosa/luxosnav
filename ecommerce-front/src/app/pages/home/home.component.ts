import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionChegandoAgoraComponent } from '../../home/section-chegando-agora/section-chegando-agora.component';
import { SectionLuxoEleganciaComponent } from '../../home/section-luxo-elegancia/section-luxo-elegancia.component';
import { SectionInvernoComponent } from '../../home/section-inverno/section-inverno.component';
import { SectionPromocoesComponent } from '../../home/section-promocoes/section-promocoes.component';
import { MarcasComponent } from '../../shared/marcas/marcas.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { SectionMaisVendidosComponent } from '../../home/section-mais-vendidos/section-mais-vendidos.component';
import { Product } from '../../models/product.models';
import { ProductApiService } from '../../services/product-api.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    SubnavbarComponent,
    BannerComponent,
    FooterComponent,
    MarcasComponent,
    SectionChegandoAgoraComponent,
    SectionMaisVendidosComponent,
    SectionLuxoEleganciaComponent,
    SectionInvernoComponent,
    SectionPromocoesComponent,
    ProductCardComponent,

  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  produtos: Product[] = [];
  loading = true;

  constructor(private productService: ProductApiService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.produtos = data;
      this.loading = false;
    });
  }
}
