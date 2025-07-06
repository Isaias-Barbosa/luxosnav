package ecommerce.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "item_pedido")
public class ItemPedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @ManyToOne(optional = false)
    private Pedido pedido;

    @ManyToOne(optional = false)
    private Produto produto;

    @Column(nullable = false)
    private int quantidade;

    public ItemPedido() {
    }

    public ItemPedido(Pedido pedido, Produto produto, int quantidade) {
        this.pedido = pedido;
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public BigDecimal getSubtotal() {
        return produto.getPreco()
                .multiply(BigDecimal.valueOf(quantidade));
    }

    @Override
    public String toString() {
        return "ItemPedido{" +
                "pedido=" + pedido +
                "produto=" + produto +
                ", quantidade=" + quantidade +
                ", subtotal=" + getSubtotal() +
                '}';
    }

}
