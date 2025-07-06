package ecommerce.security;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import ecommerce.model.Usuario;
import ecommerce.repository.UsuarioRepository;

@Service
public class  UsuarioDetailsService implements UserDetailsService{
    private final UsuarioRepository repo;

    public UsuarioDetailsService(UsuarioRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = repo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        return User.builder()
                .username(usuario.getUsername())
                .password(usuario.getSenha())
                .roles(usuario.getRoles().toArray(new String[0]))
                .build();
    }

}
