package ecommerce.controller;

import java.util.List;

import ecommerce.dto.PedidoDTO;
import ecommerce.dto.PedidoRequestDTO;
import ecommerce.mapper.PedidoMapper;
import ecommerce.model.Pedido;
import ecommerce.service.PedidoService;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {
    private final PedidoService service;
    private final PedidoMapper mapper;

    public PedidoController(PedidoService service, PedidoMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<PedidoDTO>> listar() {
        List<Pedido> pedidos = service.findAll();
        return ResponseEntity.ok(pedidos.stream().map(mapper::toDTO).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoDTO> buscarPorId(@PathVariable Long id) {
        return service.findById(id)
                .map(mapper::toDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PedidoDTO> criar(@RequestBody @Valid PedidoRequestDTO dto) {
        Pedido pedido = service.converterEDepoisSalvar(dto); // você pode criar esse método no serviço
        return ResponseEntity.status(201).body(mapper.toDTO(pedido));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PedidoDTO> atualizar(@PathVariable Long id, @RequestBody Pedido pedido) {
        return service.update(id, pedido)
                .map(mapper::toDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (service.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
