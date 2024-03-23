package com.hadproject.healthcareapp.qans;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hadproject.healthcareapp.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponse {


    @JsonProperty("answer_id")
    private int id;

    @JsonProperty("Answer posted by:")
    private User u_id;

    @JsonProperty("answers_text")
    private String answers_text;

    @JsonProperty("Date")
    private String date;

    @JsonProperty("flag")
    private int flag;

    @JsonProperty("upvote")
    private int upvotes;

}
