package com.slogans.controller;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlGroup;
import org.springframework.test.web.servlet.MockMvc;

import static com.slogans.controller.EndPoints.PATH_THEMES;
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
    void testSlogansController() {
        mvc.perform(
                        get(PATH_THEMES)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$", hasSize(2)),
                        jsonPath("$[1].label").value("Pinky"),
                        jsonPath("$[1].id").value(2L)
                );
    }

    @Test
    @SneakyThrows
    @SqlGroup({
            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "insert_themes.sql"),
            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
    })
    void testSloganController() {
        mvc.perform(
                        get("/api/theme/2")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpectAll(status().isOk(),
                        jsonPath("$.label").value("Pinky")
                );
    }

//    @Test
//    @SneakyThrows
//    @SqlGroup({
//            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
//    })
//    void testAddSloganController() {
//        final var slogan = new Slogan();
//        slogan.setSlogan("Reduce, ruse, recycle");
//
//        final var gson = new GsonBuilder().setPrettyPrinting().create();
//        final var sloganAsJson = gson.toJson(slogan);
//
//        mvc.perform(
//                        post(PATH_SLOGANS)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(sloganAsJson)
//                )
//                .andExpectAll(status().isOk(),
//                        jsonPath("$.slogan").value("Reduce, ruse, recycle")
//                );
//
//        mvc.perform(
//                        get("/api/slogan")
//                                .contentType(MediaType.APPLICATION_JSON)
//                )
//                .andExpectAll(status().isOk(),
//                        jsonPath("$", hasSize(1))
//                );
//    }
//
//    @Test
//    @SneakyThrows
//    @SqlGroup({
//            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "get_themes.sql"),
//            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
//    })
//    void testUpdateSloganController() {
//        String updateText = "Updated slogan text";
//        final var gson = new GsonBuilder().setPrettyPrinting().create();
//
//        mvc.perform(
//                        put("/api/slogan/2")
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(updateText)
//                )
//                .andExpectAll(status().isOk()
//                );
//
//        mvc.perform(
//                        get("/api/slogan/2")
//                                .contentType(MediaType.APPLICATION_JSON)
//                )
//                .andExpectAll(status().isOk(),
//                        jsonPath("$.slogan").value("Updated slogan text")
//                );
//    }
//
//    @Test
//    @SneakyThrows
//    @SqlGroup({
//            @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "get_themes.sql"),
//            @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "clear_themes.sql")
//    })
//    @Sql("get_slogans.sql")
//    void testDeleteSloganController() {
//        mvc.perform(
//                        delete("/api/slogan/1")
//                                .contentType(MediaType.APPLICATION_JSON)
//                )
//                .andExpectAll(status().isOk()
//                );
//        mvc.perform(
//                        get("/api/slogan")
//                                .contentType(MediaType.APPLICATION_JSON)
//                )
//                .andExpectAll(status().isOk(),
//                        jsonPath("$", hasSize(1))
//                );
//    }
}
