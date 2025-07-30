package sum.swrwebsitebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sum.swrwebsitebackend.entity.User;

import java.util.Optional;

// This interface provides all the standard database operations (save, findById, etc.)
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom query to find a user by their username
    Optional<User> findByUsername(String username);
}
