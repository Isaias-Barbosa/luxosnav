import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SubnavbarComponent } from '../../shared/subnavbar/subnavbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pedido-concluido',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SubnavbarComponent, FooterComponent, RouterModule],
  templateUrl: './pedido-concluido.component.html',
})
export class PedidoConcluidoComponent {
pedidoId = '';

ngOnInit(): void {
  const timestamp = Date.now().toString().slice(-5);
  const random = Math.floor(1000 + Math.random() * 9000);
  this.pedidoId = `#PED${random}${timestamp}`;
}


}