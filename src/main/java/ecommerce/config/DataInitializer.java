package ecommerce.config;

import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import ecommerce.model.Usuario;
import ecommerce.repository.UsuarioRepository;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner initUsuarios(UsuarioRepository usuarioRepo, PasswordEncoder encoder) {
        return args -> {
            if (usuarioRepo.findByUsername("admin").isEmpty()) {
                Usuario admin = new Usuario();
                admin.setUsername("admin");
                admin.setSenha(encoder.encode("123456"));
                admin.setRoles(Set.of("ADMIN"));

                usuarioRepo.save(admin);
                System.out.println("✅ Usuário admin criado com sucesso!");
            }
        };
    }

}
