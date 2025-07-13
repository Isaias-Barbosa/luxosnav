import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { produtos } from '../../mocks/produtos.mock';
import { Product } from '../../models/product.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-produto-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,
  ],
  templateUrl: './produto-details.component.html',
})
export class ProdutoDetailsComponent implements OnInit {
  product!: Product;
  loading = true;

  imagemSelecionada = '';
  tamanhoSelecionado = '';
  produtosSemelhantes: Product[] = [];

  cep = '';
  valorFrete = 0;
  carregandoFrete = false;

  carregandoCompra = false;
  adicionadoCarrinho = false;

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router
) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    const id = Number(params['id']);
    this.product = produtos.find(p => p.id === id)!;
    this.imagemSelecionada = this.product.imagens?.[0] || this.product.imagem;
    this.produtosSemelhantes = produtos.filter(
      p => p.categoria === this.product.categoria && p.id !== this.product.id
    );
    this.tamanhoSelecionado = '';
    this.valorFrete = 0;
    this.carregandoCompra = false;
    this.adicionadoCarrinho = false;
    this.carregandoFrete = false;

    this.loading = false;
  });
}


  calcularMedia(avaliacoes: { nota: number }[]): string {
    const soma = avaliacoes.reduce((acc, item) => acc + item.nota, 0);
    return (soma / avaliacoes.length).toFixed(1);
  }

  calcularFrete() {
    this.carregandoFrete = true;
    setTimeout(() => {
      this.valorFrete = Math.random() * 20 + 10; // valor fictício
      this.carregandoFrete = false;
    }, 1500);
  }


comprarAgora() {
  this.carregandoCompra = true;

  // Simula pequeno delay visual e redirecionamento
  setTimeout(() => {
    this.cartService.adicionarProduto(this.product);
    this.carregandoCompra = false;
    this.router.navigate(['/carrinho']);
  }, 100); // tempo só pra dar o efeito de "Processando..."
}


adicionarCarrinho() {
  this.cartService.adicionarProduto(this.product);
  this.adicionadoCarrinho = true;
  setTimeout(() => {
    this.adicionadoCarrinho = false;
  }, 2000);
}

}