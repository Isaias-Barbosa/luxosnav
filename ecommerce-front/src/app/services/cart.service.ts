import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: Product[] = [];
    private cartSubject = new BehaviorSubject<Product[]>([]);
    cart$ = this.cartSubject.asObservable();

    constructor() {
        const stored = localStorage.getItem('cart');
        this.cartItems = stored ? JSON.parse(stored) : [];
        this.cartSubject.next(this.cartItems);
    }

    adicionarProduto(produto: Product) {
        const existente = this.cartItems.find(p => p.id === produto.id);
        if (existente) {
            existente.quantidade = (existente.quantidade || 1) + 1;
        } else {
            this.cartItems.push({ ...produto, quantidade: 1 });
        }
        this.atualizarStorage();
    }

    atualizarQuantidade(produto: Product) {
        const item = this.cartItems.find(p => p.id === produto.id);
        if (item) item.quantidade = produto.quantidade;
        this.atualizarStorage();
    }

    getSubtotal(): number {
  return this.cartItems.reduce((acc, p) => acc + p.preco * (p.quantidade || 1), 0);
}


    atualizarTamanho(item: Product) {
        const produto = this.cartItems.find(p => p.id === item.id);
        if (produto) {
            produto.tamanhoSelecionado = item.tamanhoSelecionado;
            this.atualizarStorage();
        }
    }



    removerProduto(id: number) {
        this.cartItems = this.cartItems.filter(p => p.id !== id);
        this.atualizarStorage();
    }

    limparCarrinho() {
        this.cartItems = [];
        this.atualizarStorage();
    }

    getQuantidade(): number {
        return this.cartItems.length;
    }


    private atualizarStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        this.cartSubject.next(this.cartItems);
    }
}