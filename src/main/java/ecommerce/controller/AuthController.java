package ecommerce.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ecommerce.repository.UsuarioRepository;

import ecommerce.security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UsuarioRepository usuarioRepo;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder encoder;

    public AuthController(UsuarioRepository usuarioRepo, JwtUtil jwtUtil, PasswordEncoder encoder) {
        this.usuarioRepo = usuarioRepo;
        this.jwtUtil = jwtUtil;
        this.encoder = encoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> login) {
        String username = login.get("username");
        String senha = login.get("senha");

        return usuarioRepo.findByUsername(username)
                .filter(user -> encoder.matches(senha, user.getSenha()))
                .map(user -> jwtUtil.gerarToken(username))
                .map(token -> ResponseEntity.ok(Map.of("token", token)))
                .orElse(ResponseEntity.status(401).body(Map.of("erro", "Usuário ou senha inválidos")));
    }

    @GetMapping("/me")
public ResponseEntity<?> me(@AuthenticationPrincipal UserDetails user) {
    if (user == null) {
        return ResponseEntity.status(401).body(Map.of("erro", "Usuário não autenticado"));
    }

    return ResponseEntity.ok(Map.of(
        "username", user.getUsername(),
        "roles", user.getAuthorities()
    ));
}

}
