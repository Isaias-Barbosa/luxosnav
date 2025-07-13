import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.models';
import { produtos } from '../../mocks/produtos.mock';


@Component({
  selector: 'app-section-chegando-agora',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ necessário pro *ngFor
  templateUrl: './section-chegando-agora.component.html',
  styleUrl: './section-chegando-agora.component.scss'
})
export class SectionChegandoAgoraComponent {
  produtos: Product[] = produtos.filter(p => p.section === 'chegando-agora');
}

