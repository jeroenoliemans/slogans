package com.slogans.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "theme")
public class Theme {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    String label;

    @Column(name = "fontcolor")
    String fontColor;

    @Column(name = "backgroundcolor")
    String backgroundColor;

    @Column(name = "backgroundcolorleft")
    String backgroundColorLeft;

    @Column(name = "backgroundcolorright")
    String backgroundColorRight;

    @Column(name = "bordercolor")
    String borderColor;
}
