package ecommerce.model;

public class Fornecedor extends Pessoa {
    private String empresa;

    public Fornecedor(Long id, String nome, String empresa) {
        super(id, nome);
        this.empresa = empresa;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    @Override
    public double calcularDesconto(double valor) {
        // Implementação de exemplo, pode ser ajustada conforme a lógica de negócio
        return valor * 0.05; // 10% de desconto
    }
}
