package ecommerce.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import ecommerce.dto.PedidoDTO;
import ecommerce.model.Pedido;

@Mapper(componentModel = "spring", uses = {ItemPedidoMapper.class})
public interface PedidoMapper {

    
    @Mapping(source = "id", target = "id")
    @Mapping(source = "cliente.id", target = "clienteId")
    @Mapping(source = "cliente.nome", target = "clienteNome")
    @Mapping(source = "itens", target = "itens")
    @Mapping(target = "total", expression = "java(pedido.getTotal().doubleValue())")
    @Mapping(target = "totalComDesconto", expression = "java(pedido.getTotalComDesconto().doubleValue())")
    PedidoDTO toDTO(Pedido pedido);

}
