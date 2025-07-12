import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-luxo-elegancia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-luxo-elegancia.component.html',
  styleUrl: './section-luxo-elegancia.component.scss'
})
export class SectionLuxoEleganciaComponent {
produtos = [
    {
      nome: 'Relógio Dourado',
      descricao: 'Edição limitada com pulseira em aço',
      preco: '799,90',
      imagem: '/produtos/relogio-dourado.jpg'
    },
    {
      nome: 'Perfume Imperial',
      descricao: 'Aroma marcante com notas amadeiradas',
      preco: '429,90',
      imagem: '/produtos/perfume.jpg'
    },
    {
      nome: 'Blazer Premium',
      descricao: 'Alfaiataria com tecido italiano',
      preco: '589,90',
      imagem: '/produtos/blazer.jpg'
    },
    {
      nome: 'Sapato Social Lux',
      descricao: 'Couro legítimo com acabamento fosco',
      preco: '349,90',
      imagem: '/produtos/sapato.jpg'
    },
    {
      nome: 'Bolsa Elegance',
      descricao: 'Design clássico em couro vegano',
      preco: '319,90',
      imagem: '/produtos/bolsa-elegance.png'
    }
  ];
}
