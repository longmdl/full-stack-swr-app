package sum.swrwebsitebackend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * This bean is the one that solves your error. It configures and exposes the
     * AuthenticationManager that Spring Security uses to handle authentication.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    /**
     * A PasswordEncoder bean is required for Spring Security to work.
     * It's used to hash and verify passwords securely.
     * BCrypt is the industry standard.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * This bean configures your application's security rules, such as which
     * endpoints are public and which are protected.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Disable Cross-Site Request Forgery (CSRF) since we are using JWTs (stateless)
                .csrf(csrf -> csrf.disable())

                // Define authorization rules for HTTP requests
                .authorizeHttpRequests(auth -> auth
                        // Allow all requests to the /api/auth/** endpoints (e.g., /login, /register)
                        .requestMatchers("/api/auth/**").permitAll()
                        // Require authentication for all other requests
                        .anyRequest().authenticated()
                )

                // Configure session management to be stateless, as JWTs don't rely on sessions
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                );

        // Later, you will add your JWT filter here to validate tokens on incoming requests
        // http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
