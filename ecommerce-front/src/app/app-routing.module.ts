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
    path: 'produtos',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard]
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}