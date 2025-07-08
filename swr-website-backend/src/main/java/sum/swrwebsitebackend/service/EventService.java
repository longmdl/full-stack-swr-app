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
@Service
@RequiredArgsConstructor
public class EventService {

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
     * Stores an uploaded file.
     * @param file The MultipartFile to store.
     * @return The unique filename under which the file is stored.
     */
    private String storeFile(MultipartFile file) {
        if (file.isEmpty()) {
            throw new RuntimeException("Failed to store empty file.");
        }
        // Generate a unique filename to prevent collisions
        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, this.uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
            return filename;
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file " + filename, e);
        }
    }

    /**
     * Creates a new event and stores its cover image.
     * @param event The event data to save.
     * @param imageFile The uploaded cover image.
     * @return The saved Event entity.
     */
    public Event createEvent(Event event, MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            String filename = storeFile(imageFile);
            // We store a relative path that the controller will use to serve the image.
            event.setCoverImageUrl("/api/events/images/" + filename);
        }
        event.setCurrentRegistrations(0); // Ensure new events start with 0 registrations.
        return eventRepository.save(event);
    }

    /**
     * Updates an existing event and optionally its cover image.
     * @param id The ID of the event to update.
     * @param eventDetails The new event data.
     * @param imageFile The new optional cover image.
     * @return The updated Event entity.
     */
    public Event updateEvent(Long id, Event eventDetails, MultipartFile imageFile) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));

        event.setTitle(eventDetails.getTitle());
        event.setDescription(eventDetails.getDescription());
        event.setLocation(eventDetails.getLocation());
        event.setEventDateTime(eventDetails.getEventDateTime());
        // Note: currentRegistrations is not updated here. That would likely be a separate action.

        if (imageFile != null && !imageFile.isEmpty()) {
            // Optional: You could add logic here to delete the old image file.
            String filename = storeFile(imageFile);
            event.setCoverImageUrl("/api/events/images/" + filename);
        }

        return eventRepository.save(event);
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
