package com.fitforge.backend.service;

import com.fitforge.backend.model.Fitness;
import com.fitforge.backend.repository.FitnessRepo;

import org.springframework.stereotype.Service;

@Service
public class FitnessService {
    private FitnessRepo fitness_repo;

    public FitnessService(FitnessRepo fitness_repo) {
        this.fitness_repo = fitness_repo;
    }

    public Fitness savefitness(Fitness fit) {
        return fitness_repo.save(fit);// save the object in mongodb
    }
}