import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoDetailsComponent } from './components/produto-details/produto-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Página inicial
  },
  {
  path: 'carrinho',
  loadComponent: () => import('./cart/cart-view/cart-view.component').then(m => m.CartViewComponent),
},
  {
    path: 'produtos',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagamento',
    loadComponent: () =>
      import('./cart/pagamento/pagamento.component').then(m => m.PagamentoComponent)
  },
  {
  path: 'checkout-form',
  loadComponent: () =>
    import('./checkout/checkout-form/checkout-form.component').then(m => m.CheckoutFormComponent)
},
  {
  path: 'pedido-concluido',
  loadComponent: () =>
    import('./cart/pedidos/pedido-concluido.component').then(m => m.PedidoConcluidoComponent)
},


  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule) // Carrega módulo de autenticação
  },
  { path: 'produto/:id', component: ProdutoDetailsComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}