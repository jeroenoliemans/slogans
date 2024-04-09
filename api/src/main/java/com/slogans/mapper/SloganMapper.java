package com.slogans.mapper;

import com.slogans.domain.Slogan;
import com.slogans.dto.SloganDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface SloganMapper {
    SloganDTO toDto(Slogan slogan);

    Slogan toEntity(SloganDTO sloganDTO);
}
