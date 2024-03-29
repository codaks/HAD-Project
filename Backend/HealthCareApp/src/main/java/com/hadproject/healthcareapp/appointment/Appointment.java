package com.hadproject.healthcareapp.appointment;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hadproject.healthcareapp.expert.Expert;
import com.hadproject.healthcareapp.patient.Patient;
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
@Table(name = "appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "A_id")
    int id;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private Set<Expert> e_id;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private Set<Patient> p_id;

    @JsonIgnore
    @Column(nullable = false)
    private String date;

    @JsonIgnore
    @Column(nullable = false)
    private String time;


}
