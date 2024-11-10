package com.slogans.controller;

import com.slogans.domain.Slogan;
import com.slogans.dto.SloganDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.slogans.service.SloganService;

import java.util.List;
import java.util.Optional;

import static com.slogans.controller.EndPoints.PATH_SLOGAN;
import static com.slogans.controller.EndPoints.PATH_SLOGAN_ID;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class SloganController {
    private final SloganService sloganService;

    @GetMapping(value = PATH_SLOGAN)
    List<SloganDTO> getAll() {
        return sloganService.getSlogans();
    }

    @GetMapping(value = PATH_SLOGAN_ID)
    Optional<SloganDTO> getSlogan(@PathVariable Long id) {
        return sloganService.getSlogan(id);
    }

    @PostMapping(value = PATH_SLOGAN)
    Slogan saveSlogan(@RequestBody Slogan slogan) {
        return sloganService.save(slogan);
    }

    @PutMapping(value = PATH_SLOGAN_ID)
    void updateSlogan(@PathVariable Long id, @RequestBody String updatedSloganText) {
        sloganService.updateSlogan(id, updatedSloganText);
    }

    @DeleteMapping(value = PATH_SLOGAN_ID)
    void deleteSlogan(@PathVariable Long id) {
        sloganService.deleteSlogan(id);
    }
}
