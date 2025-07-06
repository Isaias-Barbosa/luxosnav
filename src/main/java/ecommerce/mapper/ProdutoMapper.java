package ecommerce.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import ecommerce.dto.ProdutoDTO;
import ecommerce.model.Produto;

@Mapper(componentModel = "spring")
public interface ProdutoMapper {
     ProdutoDTO toDTO(Produto produto);
    Produto toEntity(ProdutoDTO dto);
    List<ProdutoDTO> toDTOList(List<Produto> produtos);

}
