package com.slogans.controller;

import com.slogans.domain.Theme;
import com.slogans.dto.ThemeDTO;
import com.slogans.dto.ThemeOptionsDTO;
import com.slogans.service.ThemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static com.slogans.controller.EndPoints.API_THEME_ID;
import static com.slogans.controller.EndPoints.PATH_THEME;
import static com.slogans.controller.EndPoints.PATH_THEME_OPTIONS;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ThemeController {
    private final ThemeService themeService;

    @GetMapping(value = PATH_THEME)
    List<ThemeDTO> getAll() {
        return themeService.getThemes();
    }

    @GetMapping(value = PATH_THEME_OPTIONS)
    List<ThemeOptionsDTO> getOptions() {return themeService.getThemeOptions();}

    @GetMapping(value = API_THEME_ID)
    Optional<ThemeDTO> getTheme(@PathVariable Long id) {
        return themeService.getTheme(id);
    }

    @PostMapping(value = PATH_THEME)
    Theme saveTheme(@RequestBody Theme theme) {
        return themeService.save(theme);
    }

    @PutMapping(value = API_THEME_ID)
    void updateTheme(@RequestBody Theme theme) {
        themeService.updateTheme(theme);
    }

    @DeleteMapping(value = API_THEME_ID)
    void deleteTheme(@PathVariable Long id) {
        themeService.deleteTheme(id);
    }
}
