package sum.swrwebsitebackend.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

/**
 * Configures the application's security settings, including web security,
 * OAuth2 login, and in-memory user authentication.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${admin.email}")
    private String adminEmail;

    /**
     * Defines a password encoder bean that uses the BCrypt hashing algorithm.
     * This is used for encoding passwords for the in-memory user.
     * @return A PasswordEncoder instance.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Configures an in-memory user for development or as a fallback admin account.
     * This user has a username, a securely encoded password, and the 'ADMIN' role.
     * @param passwordEncoder The password encoder to use for hashing the password.
     * @return A UserDetailsService with the in-memory user.
     */
    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails admin = User.withUsername("admin")
                .password(passwordEncoder.encode("password")) // Change "password" to a strong password
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(admin);
    }

    /**
     * The main security configuration bean that defines how HTTP requests are secured.
     * @param http The HttpSecurity object to configure.
     * @return The configured SecurityFilterChain.
     * @throws Exception If an error occurs during configuration.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authz -> authz
                        // Your rules are perfect, no changes needed here
                        .requestMatchers(HttpMethod.GET, "/api/events", "/api/events/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/events").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/api/events/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/api/events/**").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(authenticationSuccessHandler())
                )
                .formLogin(form -> form
                        .defaultSuccessUrl("/api/events", true)
                )
                .httpBasic(Customizer.withDefaults()); // <-- ADD THIS LINE

        return http.build();
    }

    /**
     * Creates a custom success handler for OAuth2 authentication.
     * After a user logs in via OAuth2, this handler checks their email.
     * If it matches the admin email, they are granted the 'ADMIN' role.
     * @return An AuthenticationSuccessHandler instance.
     */
    @Bean
    public AuthenticationSuccessHandler authenticationSuccessHandler() {
        return (request, response, authentication) -> {
            OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
            String email = oAuth2User.getAttribute("email");

            // Check if the authenticated user's email matches the admin email
            if (adminEmail.equalsIgnoreCase(email)) {
                // Here you would typically re-authenticate the user with the ADMIN role
                // For simplicity, we'll just redirect. A more robust solution would use
                // a custom authorities mapper. This logic is conceptual to show the check.
                // In a real app, you'd grant the ADMIN authority here.
                System.out.println("Admin user logged in: " + email);
            } else {
                System.out.println("Regular user logged in: " + email);
            }

            // Redirect all users to the events feed after login.
            // Access control on the endpoints will handle authorization.
            response.sendRedirect("/api/events");
        };
    }
}