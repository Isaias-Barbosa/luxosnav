package ecommerce.mapper;

import ecommerce.dto.ItemPedidoDTO;
import ecommerce.model.ItemPedido;
import ecommerce.model.Produto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-07-11T19:23:38-0300",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.42.50.v20250628-1110, environment: Java 21.0.7 (Eclipse Adoptium)"
)
@Component
public class ItemPedidoMapperImpl implements ItemPedidoMapper {

    @Override
    public ItemPedidoDTO toDTO(ItemPedido item) {
        if ( item == null ) {
            return null;
        }

        ItemPedidoDTO itemPedidoDTO = new ItemPedidoDTO();

        itemPedidoDTO.setId( item.getId() );
        itemPedidoDTO.setProdutoId( itemProdutoId( item ) );
        itemPedidoDTO.setProdutoNome( itemProdutoNome( item ) );
        itemPedidoDTO.setQuantidade( item.getQuantidade() );

        itemPedidoDTO.setSubtotal( item.getProduto().getPreco().doubleValue() * item.getQuantidade() );

        return itemPedidoDTO;
    }

    @Override
    public List<ItemPedidoDTO> toDTOList(List<ItemPedido> itens) {
        if ( itens == null ) {
            return null;
        }

        List<ItemPedidoDTO> list = new ArrayList<ItemPedidoDTO>( itens.size() );
        for ( ItemPedido itemPedido : itens ) {
            list.add( toDTO( itemPedido ) );
        }

        return list;
    }

    private Long itemProdutoId(ItemPedido itemPedido) {
        if ( itemPedido == null ) {
            return null;
        }
        Produto produto = itemPedido.getProduto();
        if ( produto == null ) {
            return null;
        }
        Long id = produto.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String itemProdutoNome(ItemPedido itemPedido) {
        if ( itemPedido == null ) {
            return null;
        }
        Produto produto = itemPedido.getProduto();
        if ( produto == null ) {
            return null;
        }
        String nome = produto.getNome();
        if ( nome == null ) {
            return null;
        }
        return nome;
    }
}
