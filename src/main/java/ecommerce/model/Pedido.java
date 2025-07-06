package ecommerce.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.math.BigDecimal;


@Entity
@Table(name = "pedido")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private Cliente cliente;

    private LocalDateTime data = LocalDateTime.now();

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<ItemPedido> itens = new ArrayList<>();

    public Pedido() {
        this.data = LocalDateTime.now();
    }

    public Pedido(Long id, Cliente cliente) {
        this();
        this.id = id;
        this.cliente = cliente;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public LocalDateTime getData() {
        return data;
    }

    public List<ItemPedido> getItens() {
        return itens;
    }

    public void setItens(List<ItemPedido> itens) {
    this.itens = itens;
}

    public void addItem(ItemPedido item) {
        itens.add(item);
    }

    public BigDecimal getTotal() {
        return itens.stream()
                    .map(ItemPedido::getSubtotal)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    
    public BigDecimal getTotalComDesconto() {
       BigDecimal totalBruto = getTotal();
    
        double desconto = cliente.calcularDesconto(totalBruto.doubleValue());
        return totalBruto.subtract(BigDecimal.valueOf(desconto));
    }


    @Override
    public String toString() {
        return "Pedido{" +
               "id=" + id +
               ", cliente=" + cliente +
               ", data=" + data +
               ", total=" + getTotal() +
               '}';
    }
}
