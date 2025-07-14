package sum.swrwebsitebackend.service.impl;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import sum.swrwebsitebackend.entity.Event;
import sum.swrwebsitebackend.repository.EventRepository;
import sum.swrwebsitebackend.service.EventService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    private final EventRepository eventRepository;

    @Value("${file.upload-dir:./uploads}") // Injects upload directory path from properties
    private String uploadDir;

    private Path uploadPath;

    /**
     * Initializes the service by creating the upload directory if it doesn't exist.
     */
    @PostConstruct
    public void init() {
        this.uploadPath = Paths.get(uploadDir);
        try {
            Files.createDirectories(uploadPath);
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload directory!", e);
        }
    }


    /**
     * Creates a new event and stores its cover image.
     * @param event The event data to save.
     * @return The saved Event entity.
     */
    public Event createEvent(Event event) {
        // The event object now arrives with the coverImageUrl already set from the client.
        // We no longer need to process a file upload.

        // Set any server-side default values for a new event.
        event.setCurrentRegistrations(0);

        return eventRepository.save(event);
    }
    /**
     * Updates an existing event.
     * @param id The ID of the event to update.
     * @param eventDetails An Event object containing the new data.
     * @return The updated Event entity.
     */
    public Event updateEvent(Long id, Event eventDetails) {
        // First, check if the event we're trying to update actually exists.
        if (!eventRepository.existsById(id)) {
            throw new RuntimeException("Event not found with id: " + id);
        }

        // Set the ID from the path variable onto the event object from the request body.
        // This ensures we are updating the correct record.
        eventDetails.setId(id);

        // The eventDetails object contains all the new data, including the updated coverImageUrl.
        // JPA's save method will perform an UPDATE because the ID is set.
        return eventRepository.save(eventDetails);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAllByOrderByEventDateTimeDesc();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public void deleteEvent(Long id) {
        // Optional: Add logic to delete the associated image file from storage.
        eventRepository.deleteById(id);
    }
}
