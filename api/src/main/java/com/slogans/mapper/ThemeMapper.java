package com.slogans.mapper;

import com.slogans.domain.Theme;
import com.slogans.dto.ThemeDTO;
import com.slogans.dto.ThemeOptionsDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ThemeMapper {
    ThemeDTO toDto(Theme theme);

    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "label", source = "label")
    ThemeOptionsDTO toOptionsDto(Theme them);

    Theme toEntity(ThemeDTO themeDTO);
}
