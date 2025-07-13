import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Product } from '../../models/product.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent
  ],
  templateUrl: './pagamento.component.html',
})
export class PagamentoComponent {
  cart: Product[] = [];
  subtotal = 0;
  cupom = '';
  desconto = 0;
  parcelas = 1;
  

  constructor(public cartService: CartService, private router: Router) {}


  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.subtotal = this.cartService.getSubtotal();
    });
  }

  aplicarCupom() {
    if (this.cupom === 'EXEMPLO10') {
      this.desconto = this.subtotal * 0.1;
    } else {
      this.desconto = 0;
      alert('Cupom inválido!');
    }
  }

 finalizarCompra() {
  this.router.navigate(['/checkout-form']);
}


}