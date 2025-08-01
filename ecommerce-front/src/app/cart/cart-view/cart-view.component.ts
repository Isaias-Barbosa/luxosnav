import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.models';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, SubnavbarComponent, FooterComponent, FormsModule],
  templateUrl: './cart-view.component.html',
})
export class CartViewComponent {
  cart: Product[] = [];
  subtotal = 0;

  public constructor(public cartService: CartService) {}


  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.subtotal = this.cartService.getSubtotal();
    });
  }

  removerItem(id: number) {
    this.cartService.removerProduto(id);
  }

  cupom = '';
  desconto = 0;

  validarCupom() {
    if (this.cupom === 'EXEMPLO10') {
      this.desconto = this.subtotal * 0.1;
    } else {
      this.desconto = 0;
      alert('Cupom inválido!');
    }
  }

  parcelas = 1;
}