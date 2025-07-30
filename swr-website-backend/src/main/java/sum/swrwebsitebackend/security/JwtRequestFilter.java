package sum.swrwebsitebackend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;

    // Spring will inject your JwtUtil and UserDetailsService beans
    public JwtRequestFilter(JwtUtil jwtUtil, UserDetailsService userDetailsService) {
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String username;

        // 1. Check if there's a token
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response); // If not, continue to the next filter
            return;
        }

        // 2. Extract the token from the "Bearer " string
        jwt = authHeader.substring(7);

        try {
            // 3. Extract the username from the token using your JwtUtil
            username = jwtUtil.extractUsername(jwt);

            // 4. If we have a username and the user is not already authenticated...
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

                // 5. Load the user's details from the database
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

                // 6. Check if the token is valid
                if (jwtUtil.isTokenValid(jwt, userDetails)) {

                    // 7. If valid, update the SecurityContext to mark the user as authenticated
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null, // Credentials are not needed for token-based auth
                            userDetails.getAuthorities()
                    );
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        } catch (Exception e) {
            // If the token is invalid (expired, malformed, etc.), an exception will be thrown.
            // We do nothing here, and the request will proceed without authentication,
            // eventually being blocked by Spring Security for protected endpoints.
        }

        // 8. Pass the request along to the next filter in the chain
        filterChain.doFilter(request, response);
    }
}
