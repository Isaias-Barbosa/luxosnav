package ecommerce.service;


import org.springframework.stereotype.Service;

import ecommerce.model.Cliente;
import ecommerce.repository.ClienteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    private final ClienteRepository repo;

    public ClienteService(ClienteRepository repo) {
        this.repo = repo;
    }

    public List<Cliente> findAll() {
        return repo.findAll();
    }

    public Optional<Cliente> findById(Long id) {
        return repo.findById(id);
    }

    public Cliente save(Cliente cliente) {
        return repo.save(cliente);
    }

    public Optional<Cliente> update(Long id, Cliente novo) {
        return repo.findById(id).map(c -> {
            c.setNome(novo.getNome());
            c.setEmail(novo.getEmail());
            return repo.save(c);
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
