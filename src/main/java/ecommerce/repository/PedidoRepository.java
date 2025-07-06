package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> { }
