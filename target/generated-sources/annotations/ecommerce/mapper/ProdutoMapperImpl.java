package ecommerce.mapper;

import ecommerce.dto.ProdutoDTO;
import ecommerce.model.Produto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-07-06T21:45:58-0300",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.42.50.v20250628-1110, environment: Java 21.0.7 (Eclipse Adoptium)"
)
@Component
public class ProdutoMapperImpl implements ProdutoMapper {

    @Override
    public ProdutoDTO toDTO(Produto produto) {
        if ( produto == null ) {
            return null;
        }

        ProdutoDTO produtoDTO = new ProdutoDTO();

        produtoDTO.setId( produto.getId() );
        produtoDTO.setNome( produto.getNome() );
        produtoDTO.setPreco( produto.getPreco() );

        return produtoDTO;
    }

    @Override
    public Produto toEntity(ProdutoDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Produto produto = new Produto();

        produto.setId( dto.getId() );
        produto.setNome( dto.getNome() );
        produto.setPreco( dto.getPreco() );

        return produto;
    }

    @Override
    public List<ProdutoDTO> toDTOList(List<Produto> produtos) {
        if ( produtos == null ) {
            return null;
        }

        List<ProdutoDTO> list = new ArrayList<ProdutoDTO>( produtos.size() );
        for ( Produto produto : produtos ) {
            list.add( toDTO( produto ) );
        }

        return list;
    }
}
