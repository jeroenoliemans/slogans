package com.slogans.service;

import com.slogans.domain.Theme;
import com.slogans.repository.ThemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class ThemeService {
    @Autowired
    private final ThemeRepository themeRepository;
    public List<Theme> getThemes() {
        return themeRepository.findAll().stream().toList();
    }

    public Optional<Theme> getTheme(Long id) {
        return themeRepository.findById(id);
    }
}
