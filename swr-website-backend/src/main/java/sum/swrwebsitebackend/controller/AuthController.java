package sum.swrwebsitebackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import sum.swrwebsitebackend.entity.User;
import sum.swrwebsitebackend.repository.UserRepository;
import sum.swrwebsitebackend.request.LoginRequest;
import sum.swrwebsitebackend.request.RegistrationRequest;
import sum.swrwebsitebackend.security.JwtUtil;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest creds) {
        try {
            Authentication authResult = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(creds.username(), creds.password())
            );
            String jwt = jwtUtil.generateToken(authResult);
            return ResponseEntity.ok(Map.of("token", jwt));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid username or password"));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationRequest request) {
        // Check if username already exists
        if (userRepository.findByUsername(request.username()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", "Username is already taken"));
        }
        // Create a new user and encode the password
        User newUser = User.builder()
                .username(request.username())
                .password(passwordEncoder.encode(request.password()))
                .role("ADMIN")
                .build();
        userRepository.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "User registered successfully"));
    }
}
