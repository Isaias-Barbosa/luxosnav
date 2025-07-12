import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-chegando-agora',
  standalone: true,
  imports: [CommonModule], // ✅ necessário pro *ngFor
  templateUrl: './section-chegando-agora.component.html',
  styleUrl: './section-chegando-agora.component.scss'
})
export class SectionChegandoAgoraComponent {
produtos = [
    {
      nome: 'Jaqueta Eco',
      descricao: 'Fabricada com materiais reciclados',
      preco: '279,90',
      imagem: '/produtos/jaqueta-eco.png'
    },
    {
      nome: 'Tênis SolarRun',
      descricao: 'Com solado leve e resistente',
      preco: '229,90',
      imagem: '/produtos/tenis-solarrun.jpg'
    },
    {
      nome: 'Bolsa Minimal',
      descricao: 'Design limpo e versátil',
      preco: '149,90',
      imagem: '/produtos/bolsa-minimal.jpg'
    },
    {
      nome: 'Óculos Reflex',
      descricao: 'Lentes espelhadas com proteção UV',
      preco: '99,90',
      imagem: '/produtos/oculos-reflex.jpg'
    },
    {
      nome: 'Camisa TechDry',
      descricao: 'Tecido antiumidade, ideal para treino',
      preco: '89,90',
      imagem: '/produtos/camisa-techdry.jpg'
    }
  ];

}
