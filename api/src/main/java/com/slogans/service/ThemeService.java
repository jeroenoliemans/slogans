package com.slogans.service;

import com.slogans.domain.Theme;
import com.slogans.dto.ThemeDTO;
import com.slogans.dto.ThemeOptionsDTO;
import com.slogans.mapper.ThemeMapper;
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

    @Autowired
    private final ThemeMapper themeMapper;

    public List<ThemeDTO> getThemes() {
        return themeRepository.findAll()
                .stream()
                .map(themeMapper::toDto)
                .toList();
    }

    public List<ThemeOptionsDTO> getThemeOptions() {
        return themeRepository.findAll()
                .stream()
                .map(themeMapper::toOptionsDto)
                .toList();
    }

    public Optional<ThemeDTO> getTheme(Long id) {
        return themeRepository.findById(id).map(themeMapper::toDto);
    }

    public Theme save(Theme theme) { return themeRepository.save(theme);}

    public Theme updateTheme(Theme theme) {return themeRepository.save(theme);}

    public void deleteTheme(Long id) {themeRepository.deleteById(id);}
}
