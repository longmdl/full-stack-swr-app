package sum.swrwebsitebackend.controller;

import sum.swrwebsitebackend.entity.Event;
import sum.swrwebsitebackend.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for handling event-related API requests using image URLs.
 */
@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    /**
     * Endpoint to create a new event from a JSON object.
     */
    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        // Note: Your EventService will also need to be updated.
        // It should now have a method like createEvent(Event event)
        // that simply saves the event object passed to it.
        Event createdEvent = eventService.createEvent(event);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    /**
     * Endpoint to update an existing event from a JSON object.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        try {
            // Note: Your EventService update method will also need to be updated
            // to no longer handle a MultipartFile.
            Event updatedEvent = eventService.updateEvent(id, eventDetails);
            return ResponseEntity.ok(updatedEvent);
        } catch (RuntimeException e) {
            // Assuming the service throws an exception if the event is not found.
            return ResponseEntity.notFound().build();
        }
    }

    /*
     * The endpoint to serve images (@GetMapping("/images/{filename:.+}"))
     * is no longer needed because the image URLs are external.
     * The frontend will use the event.coverImageUrl directly.
     */

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        return eventService.getEventById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
}