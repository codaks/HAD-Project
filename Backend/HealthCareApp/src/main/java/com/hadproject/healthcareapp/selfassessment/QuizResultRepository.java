package com.hadproject.healthcareapp.selfassessment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface QuizResultRepository extends JpaRepository<QuizResults, Integer> {

}
