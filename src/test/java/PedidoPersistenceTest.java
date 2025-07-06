import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import ecommerce.model.Cliente;
import ecommerce.model.ItemPedido;
import ecommerce.model.Pedido;
import ecommerce.model.Produto;
import ecommerce.repository.ClienteRepository;
import ecommerce.repository.PedidoRepository;
import ecommerce.repository.ProdutoRepository;

import static org.assertj.core.api.Assertions.assertThat;


@DataJpaTest
public class PedidoPersistenceTest {
    @Autowired
    ProdutoRepository produtoRepo;
    @Autowired
    ClienteRepository clienteRepo;
    @Autowired
    PedidoRepository pedidoRepo;

    @Test
    void devePersistirPedidoComItens() {
        // 1. Cria e persiste produto e cliente
    Produto p = produtoRepo.save(new Produto(null, "Camisa", new BigDecimal("50.00")));
    Cliente c = clienteRepo.save(new Cliente(null, "Isaias", "i@exemplo.com"));

    Pedido pe = new Pedido(null, c);
    pe.addItem(new ItemPedido(pe, p, 2)); 

    // 2. Persiste o pedido 
    Pedido salvo = pedidoRepo.save(pe);

    assertThat(salvo.getId()).isNotNull();
    assertThat(salvo.getItens()).hasSize(1);

  }

}
