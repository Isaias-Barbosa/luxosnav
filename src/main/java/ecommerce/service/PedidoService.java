package ecommerce.service;

import ecommerce.repository.ClienteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ecommerce.dto.PedidoRequestDTO;
import ecommerce.model.Cliente;
import ecommerce.model.ItemPedido;
import ecommerce.model.Pedido;
import ecommerce.model.Produto;
import ecommerce.repository.PedidoRepository;
import ecommerce.repository.ProdutoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {
    private final PedidoRepository repo;
    private final ProdutoRepository produtoRepo;
    private final ClienteRepository clienteRepo;

     public PedidoService(PedidoRepository repo, ProdutoRepository produtoRepo, ClienteRepository clienteRepo) {
        this.repo = repo;
        this.produtoRepo = produtoRepo;
        this.clienteRepo = clienteRepo;
    }

    public List<Pedido> findAll() {
        return repo.findAll();
    }

    public Optional<Pedido> findById(Long id) {
        return repo.findById(id);
    }

    public Pedido converterEDepoisSalvar(PedidoRequestDTO dto) {
    Cliente cliente = clienteRepo.findById(dto.getClienteId())
        .orElseThrow(() -> new IllegalArgumentException("Cliente não encontrado"));

    Pedido pedido = new Pedido();
    pedido.setCliente(cliente);

    List<ItemPedido> itens = dto.getItens().stream().map(itemDto -> {
        Produto produto = produtoRepo.findById(itemDto.getProdutoId())
            .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));

        ItemPedido item = new ItemPedido();
        item.setProduto(produto);
        item.setQuantidade(itemDto.getQuantidade());
        item.setPedido(pedido);
        return item;
    }).toList();

    pedido.setItens(itens);
    return repo.save(pedido);
}

    @Transactional
    public Pedido salvar(Pedido pedido) {
        pedido.getItens().forEach(item -> {
            // Busca o produto completo pelo ID
            Long produtoId = item.getProduto().getId();
            item.setProduto(produtoRepo.findById(produtoId)
                .orElseThrow(() -> new IllegalArgumentException("Produto com ID " + produtoId + " não encontrado")));

            item.setPedido(pedido);
        });

        return repo.save(pedido);
    }


    @Transactional
    public Optional<Pedido> update(Long id, Pedido novo) {
    return repo.findById(id).map(pedido -> {
        pedido.setCliente(novo.getCliente());
        pedido.getItens().clear();

        novo.getItens().forEach(item -> {
            item.setPedido(pedido); // <- ESSENCIAL
            pedido.getItens().add(item);
        });

        return repo.save(pedido);
    });
}


    @Transactional
    public boolean delete(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    

}
