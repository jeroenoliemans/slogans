package com.slogans.dto;

import lombok.Data;

@Data
public class ThemeDTO {
    private Long id;
    private String label;
    private String fontColor;
    private String backgroundColor;
    private String backgroundColorLeft;
    private String backgroundColorRight;
    private String borderColor;
}
