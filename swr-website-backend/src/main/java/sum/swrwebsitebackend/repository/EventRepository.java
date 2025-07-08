package sum.swrwebsitebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sum.swrwebsitebackend.entity.Event;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    /**
     * Finds all events, ordered by date in descending order.
     */
    List<Event> findAllByOrderByEventDateTimeDesc();
}

