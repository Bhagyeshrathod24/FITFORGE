package com.fitforge.backend.repository;

import com.fitforge.backend.model.Fitness;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FitnessRepo extends MongoRepository<Fitness, String> {

}