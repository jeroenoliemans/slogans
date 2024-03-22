package com.slogans.controller;

import com.slogans.domain.Theme;
import com.slogans.service.ThemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static com.slogans.controller.EndPoints.PATH_THEME;
import static com.slogans.controller.EndPoints.PATH_THEMES;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ThemeController {
    private final ThemeService themeService;

    @GetMapping(value = PATH_THEMES)
    List<Theme> getAll() {
        return themeService.getThemes();
    }

    @GetMapping(value = PATH_THEME)
    Optional<Theme> getTheme(@PathVariable Long id) {
        return themeService.getTheme(id);
    }
}
