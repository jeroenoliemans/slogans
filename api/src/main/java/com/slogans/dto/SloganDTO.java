package com.slogans.dto;

import com.slogans.domain.Theme;
import lombok.Data;

@Data
public class SloganDTO {
    private Long id;
    private String slogan;
    private Long themeId;
    private Theme theme;
}
