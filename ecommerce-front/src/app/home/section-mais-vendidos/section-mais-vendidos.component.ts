import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-mais-vendidos',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './section-mais-vendidos.component.html',
  styleUrl: './section-mais-vendidos.component.scss'
})
export class SectionMaisVendidosComponent {
produtos = [
     {
      nome: 'Boné Trucker',
      descricao: 'Estilo urbano e casual',
      preco: '59,90',
      imagem: '/produtos/bone.png'
    },
    {
      nome: 'Tênis Chunky',
      descricao: 'Tendência streetwear',
      preco: '289,90',
      imagem: '/produtos/chunky.jpg'
    },
    {
      nome: 'Jaqueta Jeans',
      descricao: 'Clássico atemporal',
      preco: '219,90',
      imagem: '/produtos/jaqueta-jeans.jpg'
    },
    {
      nome: 'Bolsa Transversal',
      descricao: 'Compacta e prática',
      preco: '99,90',
      imagem: '/produtos/bolsa.jpg'
    },
    {
      nome: 'Calça Jogger',
      descricao: 'Conforto e estilo',
      preco: '149,90',
      imagem: '/produtos/jogger.jpg'
    }

  ];
}
