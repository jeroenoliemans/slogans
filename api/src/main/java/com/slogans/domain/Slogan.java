package com.slogans.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "slogan")
public class Slogan {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    String slogan;

    @Column(name = "themeid")
    Long themeId;

    @OneToOne
    @JoinColumn(name = "themeid", referencedColumnName = "id", insertable=false, updatable=false)
    Theme theme;
}
