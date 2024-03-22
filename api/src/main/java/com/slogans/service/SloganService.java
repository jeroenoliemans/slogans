package com.slogans.service;

import com.slogans.domain.Slogan;
import com.slogans.repository.SloganRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SloganService {
    @Autowired
    private final SloganRepository sloganRepository;
    public List<Slogan> getSlogans() {
        return sloganRepository.findAll().stream().toList();
    }

    public Optional<Slogan> getSlogan(Long id) {
        return sloganRepository.findById(id);
    }

    public Slogan save(Slogan slogan) {
          return sloganRepository.save(slogan);
    }

    public void updateSlogan(Long id, String updatedSloganText) {
        Optional<Slogan> sloganToUpdate = sloganRepository.findById(id);
        if (sloganToUpdate.isPresent()) {
            Slogan slogan = sloganToUpdate.get();
            slogan.setSlogan(updatedSloganText);
            sloganRepository.save(slogan);
        }
    }

    public void deleteSlogan(Long id) {
        sloganRepository.deleteById(id);
    }
}
