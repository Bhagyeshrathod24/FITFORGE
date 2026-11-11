package com.fitforge.backend.controller;

import com.fitforge.backend.model.Fitness;
import com.fitforge.backend.service.FitnessService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fitness")
@CrossOrigin(origins = "http://localhost:5173")

public class FitnessController {
    private FitnessService Fitness_service;

    public FitnessController(FitnessService fitness_service) {
        this.Fitness_service = fitness_service;
    }

    @PostMapping
    public Fitness savefitness(@RequestBody Fitness fit) {
        return Fitness_service.savefitness(fit);
    }

}