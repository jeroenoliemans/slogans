package com.slogans.controller;

import com.google.gson.GsonBuilder;
import com.slogans.domain.Theme;
import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlGroup;
import org.springframework.test.web.servlet.MockMvc;

import static com.slogans.controller.EndPoints.PATH_THEME;
import static com.slogans.controller.EndPoints.PATH_THEME_OPTIONS;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ThemeControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "insert_themes.sql"),
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testGetThemesController() {
        mvc.perform(
                        get(PATH_THEME)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$", hasSize(2)),
                        jsonPath("$[1].label").value("Pinky"),
                        jsonPath("$[1].backgroundColor").value("pink"),
                        jsonPath("$[1].id").value(2L)
                );
    }

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "insert_themes.sql"),
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testGetThemeOptionsController() {
        mvc.perform(
                        get(PATH_THEME_OPTIONS)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$", hasSize(2)),
                        jsonPath("$[1].label").value("Pinky"),
                        jsonPath("$[1].id").value(2L),
                        jsonPath("$[1].backgroundColor").doesNotExist()
                );
    }

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "insert_themes.sql"),
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testGetThemeByIdController() {
        mvc.perform(
                        get("/api/theme/2")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$.label").value("Pinky")
                );
    }

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testAddThemeController() {
        final var theme = new Theme();
        theme.setLabel("Test theme");
        theme.setBackgroundColor("ff0000");
        theme.setBackgroundColorLeft("ff0000");
        theme.setBackgroundColorRight("ff0000");
        theme.setFontColor("ff0000");
        theme.setBorderColor("ff0000");

        final var gson = new GsonBuilder().setPrettyPrinting().create();
        final var themeAsJson = gson.toJson(theme);

        mvc.perform(
                        post(PATH_THEME)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(themeAsJson)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$.backgroundColor").value("ff0000")
                );

        mvc.perform(
                        get("/api/theme")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$", hasSize(1))
                );
    }

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "insert_themes.sql"),
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testUpdateSloganController() {
        final var theme = new Theme();
        theme.setId(2L);
        theme.setLabel("New label");
        theme.setBackgroundColor("ff0000");
        theme.setBackgroundColorLeft("ff0000");
        theme.setBackgroundColorRight("ff0000");
        theme.setFontColor("ff0000");
        theme.setBorderColor("ff0000");

        final var gson = new GsonBuilder().setPrettyPrinting().create();
        final var themeAsJson = gson.toJson(theme);

        mvc.perform(
                        put("/api/theme/2")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(themeAsJson)
                )
                .andExpectAll(status().isOk()
                );

        mvc.perform(
                        get("/api/theme/2")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$.label").value("New label"),
                        jsonPath("$.borderColor").value("ff0000")
                );
    }

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "insert_themes.sql"),
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testDeleteThemeController() {
        mvc.perform(
                        delete("/api/theme/1")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk()
                );
        mvc.perform(
                        get("/api/theme")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$", hasSize(1))
                );
    }
}
