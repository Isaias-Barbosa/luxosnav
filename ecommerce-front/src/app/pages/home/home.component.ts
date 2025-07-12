import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  produtos = [
    {
      nome: 'Tênis Esportivo X',
      preco: 199.99,
      imagem: 'https://cdn.dooca.store/1816/products/227188-1600-auto_640x640+fill_ffffff.jpg?v=1625711419&webp=0'
    },
    {
      nome: 'Camisa Casual Y',
      preco: 89.90,
      imagem: 'https://rsv-ink-images.ink.rsvcloud.com/images/product_art/final_image/520f509c4b220fd4d9516ecdc7cad2fb.webp'
    },
    {
      nome: 'Jaqueta Urbana Z',
      preco: 249.90,
      imagem: 'https://m.media-amazon.com/images/I/41o3KYuWN1L._SY1000_.jpg'
    },
    {
      nome: 'Tênis Branco Clean',
      preco: 179.99,
      imagem: 'https://source.unsplash.com/featured/?white-shoes'
    },
    {
      nome: 'Calça Jeans Slim',
      preco: 129.90,
      imagem: 'https://source.unsplash.com/featured/?jeans'
    },
    {
      nome: 'Mochila Estilosa',
      preco: 149.90,
      imagem: 'https://source.unsplash.com/featured/?backpack'
    }
  ];
}