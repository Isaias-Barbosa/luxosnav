package ecommerce.model;

public class ClienteVip extends Cliente{
    public ClienteVip(Long id, String nome, String email) {
        super(id, nome, email);
    }

    @Override
    public double calcularDesconto(double valor) {
        // Implementação de exemplo, pode ser ajustada conforme a lógica de negócio
        return valor * 0.10; // 10% de desconto para clientes VIP
    }
}
