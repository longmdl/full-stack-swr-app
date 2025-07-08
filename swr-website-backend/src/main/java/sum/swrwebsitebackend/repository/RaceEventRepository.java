package sum.swrwebsitebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sum.swrwebsitebackend.entity.RaceEvent;

import java.util.List;

@Repository
public interface RaceEventRepository extends JpaRepository<RaceEvent, Long> {
    List<RaceEvent> findAllByOrderByRaceDateDesc();
}
