package ecommerce.dto;

import java.util.List;

public class PedidoDTO {
    private Long id;
    private Long clienteId;
    private String clienteNome;
    private List<ItemPedidoDTO> itens;
    private Double total;
    private Double totalComDesconto;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getClienteId() {
        return clienteId;
    }
    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }
    public String getClienteNome() {
        return clienteNome;
    }
    public void setClienteNome(String clienteNome) {
        this.clienteNome = clienteNome;
    }
    public List<ItemPedidoDTO> getItens() {
        return itens;
    }
    public void setItens(List<ItemPedidoDTO> itens) {
        this.itens = itens;
    }
    public Double getTotal() {
        return total;
    }
    public void setTotal(Double total) {
        this.total = total;
    }
    public Double getTotalComDesconto() {
        return totalComDesconto;
    }
    public void setTotalComDesconto(Double totalComDesconto) {
        this.totalComDesconto = totalComDesconto;
    }

}
