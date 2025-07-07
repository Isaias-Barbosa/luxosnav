package ecommerce.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ecommerce.repository.UsuarioRepository;

import ecommerce.service.TokenService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UsuarioRepository usuarioRepo;
    private final PasswordEncoder encoder;

    private final TokenService tokenService;

    public AuthController(UsuarioRepository usuarioRepo, PasswordEncoder encoder,
            TokenService tokenService) {
        this.usuarioRepo = usuarioRepo;
        this.encoder = encoder;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> login) {
        String username = login.get("username");
        String senha = login.get("senha");

        return usuarioRepo.findByUsername(username)
                .filter(user -> encoder.matches(senha, user.getSenha()))
                .map(user -> {
                    String accessToken = tokenService.generateAccessToken(username);
                    String refreshToken = tokenService.generateRefreshToken(username);
                    return ResponseEntity.ok(Map.of(
                            "accessToken", accessToken,
                            "refreshToken", refreshToken));
                })
                .orElse(ResponseEntity.status(401).body(Map.of("erro", "Usuário ou senha inválidos")));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@AuthenticationPrincipal UserDetails user) {
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("erro", "Usuário não autenticado"));
        }

        return ResponseEntity.ok(Map.of(
                "username", user.getUsername(),
                "roles", user.getAuthorities()));
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody Map<String, String> body) {
        String refreshToken = body.get("refreshToken");

        if (tokenService.isRefreshTokenValid(refreshToken)) {
            String username = tokenService.getUsernameFromToken(refreshToken);
            String newAccessToken = tokenService.generateAccessToken(username);
            return ResponseEntity.ok(Map.of("accessToken", newAccessToken));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token inválido ou expirado");
    }

}
