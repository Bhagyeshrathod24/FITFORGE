package com.fitforge.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "fitness_assessment")

public class Fitness {
    @Id
    private String id;
    private String gender;
    private String age;
    private String weight;
    private String targetweight;
    private String fitness_experience;
    private String body_type;
    private String fitnessgoal;

    public Fitness() {

    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getGender() {
        return gender;
    }

    public String getAge() {
        return age;
    }

    public String getWeight() {
        return weight;
    }

    public String getTargetweight() {
        return targetweight;
    }

    public String getFitness_experience() {
        return fitness_experience;
    }

    public String getBody_type() {
        return body_type;
    }

    public String getFitnessgoal() {
        return fitnessgoal;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public void setTargetweight(String targetweight) {
        this.targetweight = targetweight;
    }

    public void setFitness_experience(String fitness_experience) {
        this.fitness_experience = fitness_experience;
    }

    public void setBody_type(String body_type) {
        this.body_type = body_type;
    }

    public void setFitnessgoal(String fitnessgoal) {
        this.fitnessgoal = fitnessgoal;
    }

}