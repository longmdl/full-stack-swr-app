package sum.swrwebsitebackend.controller;

// Required imports for Spring Web annotations
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Required imports for handling HTTP responses
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

// Required imports for Spring Security
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

// Utility for handling data structures
import java.util.Map;

// Your custom classes (adjust package if necessary)
import sum.swrwebsitebackend.request.LoginRequest;
import sum.swrwebsitebackend.security.JwtUtil;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil; // your utility to build/validate tokens

    // Constructor injection is a best practice
    public AuthController(AuthenticationManager authenticationManager,
                          JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest creds) {
        try {
            // 1. Build an Authentication token from the raw credentials
            UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(creds.username(), creds.password());
            // 2. Delegate to Spring Security’s AuthenticationManager to validate
            Authentication authResult = authenticationManager.authenticate(authToken);

            // 3. If we get here, credentials were valid – generate a JWT
            String jwt = jwtUtil.generateToken(authResult);

            // 4. Return the token in the response body for the client to store
            return ResponseEntity.ok(Map.of("token", jwt));

        } catch (BadCredentialsException ex) {
            // If authentication fails, return a 401 Unauthorized status
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid username or password"));
        }
    }
}
