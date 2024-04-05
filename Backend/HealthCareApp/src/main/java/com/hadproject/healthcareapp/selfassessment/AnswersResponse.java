package com.hadproject.healthcareapp.selfassessment;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AnswersResponse {
    @JsonProperty("id")
    private int id;

    @JsonProperty("QuestionText")
    private String QuestionText;
}
