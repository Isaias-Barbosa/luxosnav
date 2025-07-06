package ecommerce.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import ecommerce.dto.ClienteDTO;
import ecommerce.model.Cliente;

@Mapper(componentModel = "spring")
public interface ClienteMapper {
    ClienteDTO toDTO(Cliente cliente);
    Cliente toEntity(ClienteDTO dto);
    List<ClienteDTO> toDTOList(List<Cliente> clientes); 
}