package sum.swrwebsitebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sum.swrwebsitebackend.entity.RaceEvent;
import sum.swrwebsitebackend.repository.RaceEventRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/races")
@CrossOrigin(origins = "*")
public class RaceEventController {

    public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "/uploads";

    @Autowired
    private RaceEventRepository raceEventRepository;

    @GetMapping
    public List<RaceEvent> getAllRaces() {
        return raceEventRepository.findAllByOrderByRaceDateDesc();
    }

    @PostMapping
    public ResponseEntity<RaceEvent> createRace(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("raceDate") String raceDate,
            @RequestParam("carLink") String carLink,
            @RequestParam("trackLink") String trackLink,
            @RequestParam("image") MultipartFile image
    ) throws IOException {

        String originalFilename = image.getOriginalFilename();
        Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, originalFilename);
        Files.createDirectories(Paths.get(UPLOAD_DIRECTORY));
        Files.write(fileNameAndPath, image.getBytes());

        RaceEvent event = RaceEvent.builder()
                .title(title)
                .description(description)
                .raceDate(LocalDate.parse(raceDate))
                .carLink(carLink)
                .trackLink(trackLink)
                .imageUrl("/uploads/" + originalFilename)
                .build();

        RaceEvent savedEvent = raceEventRepository.save(event);
        return ResponseEntity.ok(savedEvent);
    }
}
