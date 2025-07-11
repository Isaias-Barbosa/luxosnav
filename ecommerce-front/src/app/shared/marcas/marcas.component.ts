import { Component } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss'
})
export class MarcasComponent {
 marcas = [
    { nome: 'Nike', imagem: '/marcas/nike.png' },
    { nome: 'Adidas', imagem: '/marcas/adidas.png' },
    { nome: 'Puma', imagem: '/marcas/puma.png' },
    { nome: 'Vans', imagem: '/marcas/vans.png' },
    { nome: 'New Balance', imagem: '/marcas/new.png' },
    { nome: 'Converse', imagem: '/marcas/converse.png' },
    { nome: 'Fila', imagem: '/marcas/fila.png' },
    { nome: 'Mizuno', imagem: '/marcas/mizuno.png' },
    { nome: 'Asics', imagem: '/marcas/asics.png' },
    { nome: 'Under Armour', imagem: '/marcas/under.png' }
  ];
}
