import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Product } from '../../models/product.models';


@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent
  ],
  templateUrl: './checkout-form.component.html',
})
export class CheckoutFormComponent {
  cart: Product[] = [];
  subtotal = 0;

  constructor(public cartService: CartService, public router: Router) {}



  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.subtotal = this.cartService.getSubtotal();
    });
  }

  confirmar() {
  this.cartService.limparCarrinho();
  this.router.navigate(['/pedido-concluido']);
}

}

