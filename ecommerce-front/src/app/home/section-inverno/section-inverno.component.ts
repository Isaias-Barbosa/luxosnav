import { Component } from '@angular/core';

@Component({
  selector: 'app-section-inverno',
  templateUrl: './section-inverno.component.html',
  styleUrl: './section-inverno.component.scss'
})
export class SectionInvernoComponent {
  produtos = [
    {
      nome: 'Jaqueta Puffer',
      descricao: 'Super quente e estilosa',
      preco: '299,90',
      imagem: '/produtos/jaqueta-puffer.png'
    },
    {
      nome: 'Gorro de Lã',
      descricao: 'Conforto para o frio',
      preco: '49,90',
      imagem: '/produtos/gorro.jpg'
    },
    {
      nome: 'Bota Forrada',
      descricao: 'Ideal para dias gelados',
      preco: '199,90',
      imagem: '/produtos/bota.jpg'
    },
    {
      nome: 'Cachecol Xadrez',
      descricao: 'Estilo clássico',
      preco: '59,90',
      imagem: '/produtos/cachecol.jpg'
    },
    {
      nome: 'Moletom Oversized',
      descricao: 'Conforto e atitude',
      preco: '129,90',
      imagem: '/produtos/moletom.jpg'
    }
  ];
}
