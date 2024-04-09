package com.slogans.mapper;

import com.slogans.domain.Theme;
import com.slogans.dto.ThemeDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ThemeMapper {
    ThemeDTO toDto(Theme theme);

    Theme toEntity(ThemeDTO themeDTO);
}
