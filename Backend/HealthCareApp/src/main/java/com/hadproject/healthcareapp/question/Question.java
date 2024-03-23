package com.hadproject.healthcareapp.question;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hadproject.healthcareapp.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "q_id")
    int id;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private Set<User> u_id;

    @JsonIgnore
    @Column(nullable = false)
    private String Question;

    @JsonIgnore
    @Column(nullable = false)
    private String tags;

    @JsonIgnore
    @Column(nullable = false)
    private String date;

    @JsonIgnore
    @Column(nullable = false)
    private int flag;


}
