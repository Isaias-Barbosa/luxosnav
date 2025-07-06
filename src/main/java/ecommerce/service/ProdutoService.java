package ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ecommerce.model.Produto;
import ecommerce.repository.ProdutoRepository;

@Service
public class ProdutoService {
    private final ProdutoRepository repo;

    public ProdutoService(ProdutoRepository repo) {
        this.repo = repo;
    }

    public List<Produto> findAll() {
        return repo.findAll();
    }

    public Optional<Produto> findById(Long id) {
        return repo.findById(id);
    }

    public Produto save(Produto produto) {
        return repo.save(produto);
    }

   public Optional<Produto> update(Long id, Produto novo) {
    return repo.findById(id).map(produto -> {
        produto.setNome(novo.getNome());
        produto.setPreco(novo.getPreco());
        return repo.save(produto);
        
    });
    
}
    
    public boolean delete(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;


    }
}
