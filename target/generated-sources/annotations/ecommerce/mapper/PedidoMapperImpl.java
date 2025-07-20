package ecommerce.mapper;

import ecommerce.dto.PedidoDTO;
import ecommerce.model.Cliente;
import ecommerce.model.Pedido;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-07-20T15:35:15-0300",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.42.50.v20250628-1110, environment: Java 21.0.7 (Eclipse Adoptium)"
)
@Component
public class PedidoMapperImpl implements PedidoMapper {

    @Autowired
    private ItemPedidoMapper itemPedidoMapper;

    @Override
    public PedidoDTO toDTO(Pedido pedido) {
        if ( pedido == null ) {
            return null;
        }

        PedidoDTO pedidoDTO = new PedidoDTO();

        pedidoDTO.setId( pedido.getId() );
        pedidoDTO.setClienteId( pedidoClienteId( pedido ) );
        pedidoDTO.setClienteNome( pedidoClienteNome( pedido ) );
        pedidoDTO.setItens( itemPedidoMapper.toDTOList( pedido.getItens() ) );

        pedidoDTO.setTotal( pedido.getTotal().doubleValue() );
        pedidoDTO.setTotalComDesconto( pedido.getTotalComDesconto().doubleValue() );

        return pedidoDTO;
    }

    private Long pedidoClienteId(Pedido pedido) {
        if ( pedido == null ) {
            return null;
        }
        Cliente cliente = pedido.getCliente();
        if ( cliente == null ) {
            return null;
        }
        Long id = cliente.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String pedidoClienteNome(Pedido pedido) {
        if ( pedido == null ) {
            return null;
        }
        Cliente cliente = pedido.getCliente();
        if ( cliente == null ) {
            return null;
        }
        String nome = cliente.getNome();
        if ( nome == null ) {
            return null;
        }
        return nome;
    }
}
