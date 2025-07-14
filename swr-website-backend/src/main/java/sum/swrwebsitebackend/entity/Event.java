package sum.swrwebsitebackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "events")

public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String trackLink;

    private String carLink;


    private String coverImageUrl; // Path to the event cover image

    private LocalDateTime eventDateTime; // When the event starts

    private String location; // e.g., Track name

    private int currentRegistrations;
}
