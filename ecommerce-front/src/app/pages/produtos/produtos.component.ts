import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { produtos } from '../../mocks/produtos.mock';
import { Product } from '../../models/product.models';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit{
  todosProdutos: Product[] = produtos;
  produtosFiltrados: Product[] = [];
  categoriaSelecionada: string = '';
  sectionSelecionada: string = '';
  buscaTermo: string = '';
  marcasSelecionadas: string[] = [];
  tamanhosSelecionados: string[] = [];
  marcasDisponiveis: string[] = [];
  tamanhosDisponiveis: string[] = [];
  numeracaoDisponiveis: string[] = [];
  numeracaoSelecionado: string[] = [];



  constructor(private route: ActivatedRoute) {}

  toggleMarca(marca: string) {
  this.marcasSelecionadas.includes(marca)
    ? this.marcasSelecionadas = this.marcasSelecionadas.filter(m => m !== marca)
    : this.marcasSelecionadas.push(marca);
  this.filtrarProdutos();
}

toggleTamanho(tam: string) {
  this.tamanhosSelecionados.includes(tam)
    ? this.tamanhosSelecionados = this.tamanhosSelecionados.filter(t => t !== tam)
    : this.tamanhosSelecionados.push(tam);
  this.filtrarProdutos();
}

toggleNumeracao(num: string) {
  this.numeracaoSelecionado.includes(num)
  ? this.numeracaoSelecionado = this.numeracaoSelecionado.filter(n => n !== num)
  : this.numeracaoSelecionado.push(num);
  this.filtrarProdutos();
}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoriaSelecionada = params['categoria']?.toLowerCase() || '';
      this.sectionSelecionada = params['section']?.toLowerCase() || '';
      this.extrairFiltros();
      this.filtrarProdutos();

    });
  }

  limparFiltros() {
  this.buscaTermo = '';
  this.categoriaSelecionada = '';
  this.sectionSelecionada = '';
  this.marcasSelecionadas = [];
  this.tamanhosSelecionados = [];
  this.numeracaoSelecionado = [];
  this.precoMin = 0;
  this.precoMax = 0;
  this.filtrarProdutos();
}

  extrairFiltros() {
  const marcasSet = new Set<string>();
  const tamanhosSet = new Set<string>();
  const numeracaoSet = new Set<string>();

  this.todosProdutos.forEach(prod => {
    if (prod.marca) {
      marcasSet.add(prod.marca);
    }

    prod.tamanhosDisponiveis?.forEach(t => tamanhosSet.add(t));
    prod.numeracaoDisponiveis?.forEach(n => numeracaoSet.add(n));
  });

  this.marcasDisponiveis = Array.from(marcasSet).sort();
  this.tamanhosDisponiveis = Array.from(tamanhosSet).sort((a, b) => a.localeCompare(b));
  this.numeracaoDisponiveis = Array.from(numeracaoSet).sort((a, b) => a.localeCompare(b))
}

  precoMin: number = 0;
  precoMax: number = 0;

  filtrarProdutos() {
  const busca = this.buscaTermo.toLowerCase();

  this.produtosFiltrados = this.todosProdutos.filter(p => {
    const nome = p.nome.toLowerCase();
    const cat = p.categoria.toLowerCase();
    const sec = p.section?.toLowerCase();
    const desc = p.descricao?.toLowerCase();

    const matchCategoria = !this.categoriaSelecionada || cat.includes(this.categoriaSelecionada);
    const matchSection = !this.sectionSelecionada || sec === this.sectionSelecionada;
    const matchBusca = !this.buscaTermo || nome.includes(busca) || desc.includes(busca);
    const matchMarcas = this.marcasSelecionadas.length === 0 || this.marcasSelecionadas.includes(p.marca);
    const matchTamanho = 
    this.tamanhosSelecionados.length === 0 ||
    p.tamanhosDisponiveis?.some(t => this.tamanhosSelecionados.includes(t));

    const matchNumeracao =
    this.numeracaoSelecionado.length === 0 ||
    p.numeracaoDisponiveis?.some(n => this.numeracaoSelecionado.includes(n));
    const matchPreco =
    (!this.precoMin || p.preco >= this.precoMin) &&
    (!this.precoMax || p.preco <= this.precoMax);


    return matchCategoria && matchSection && matchBusca && matchMarcas && matchTamanho && matchNumeracao && matchPreco;
  });
}

}