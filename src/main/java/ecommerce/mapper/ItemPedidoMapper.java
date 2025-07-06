package ecommerce.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import ecommerce.dto.ItemPedidoDTO;
import ecommerce.model.ItemPedido;

@Mapper(componentModel = "spring")
public interface ItemPedidoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "produto.id", target = "produtoId")
    @Mapping(source = "produto.nome", target = "produtoNome")
    @Mapping(target = "subtotal", expression = "java(item.getProduto().getPreco().doubleValue() * item.getQuantidade())")
    ItemPedidoDTO toDTO(ItemPedido item);


    List<ItemPedidoDTO> toDTOList(List<ItemPedido> itens);

    
} 