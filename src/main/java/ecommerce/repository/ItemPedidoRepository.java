package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.model.ItemPedido;

public interface ItemPedidoRepository extends JpaRepository<ItemPedido, Long> { }

