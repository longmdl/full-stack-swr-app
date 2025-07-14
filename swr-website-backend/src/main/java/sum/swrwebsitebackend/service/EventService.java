package sum.swrwebsitebackend.service;

import sum.swrwebsitebackend.entity.Event;
import sum.swrwebsitebackend.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

/**
 * Service layer for managing events and their associated cover images.
 */
public interface EventService {

    /**
     * Create a new event.
     * @param event the event data
     * @return the saved Event entity
     */
    Event createEvent(Event event);

    /**
     * Update an existing event.
     * @param id the ID of the event to update
     * @param eventDetails the new event data
     * @return the updated Event entity
     */
    Event updateEvent(Long id, Event eventDetails);

    /**
     * Retrieve all events, sorted by date/time descending.
     * @return list of events
     */
    List<Event> getAllEvents();

    /**
     * Retrieve a single event by its ID.
     * @param id the event ID
     * @return optional containing the Event if found
     */
    Optional<Event> getEventById(Long id);

    /**
     * Delete an event by its ID.
     * @param id the event ID
     */
    void deleteEvent(Long id);
}

