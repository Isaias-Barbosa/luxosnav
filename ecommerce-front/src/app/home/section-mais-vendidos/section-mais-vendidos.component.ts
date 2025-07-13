import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.models';
import { produtos } from '../../mocks/produtos.mock';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-section-mais-vendidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section-mais-vendidos.component.html',
})



export class SectionMaisVendidosComponent {
  produtos: Product[] = produtos.filter(p => p.section === 'mais-vendidos');
  @ViewChild('carrossel') carrosselRef!: ElementRef;
scrollEsquerda() {
  this.carrosselRef.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollDireita() {
  this.carrosselRef.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}

}
