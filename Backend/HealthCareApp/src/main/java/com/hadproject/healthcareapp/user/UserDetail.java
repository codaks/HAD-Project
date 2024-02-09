package com.hadproject.healthcareapp.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Optional;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "userdetail")
public class UserDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id")
    private User uid;
    private String fname;
    private String mname;
    private String lname;
    private String password;
    private String gender;
    private String hno;
    private String Street1;
    private String Street2;
    private int Pin_Code;
    private int City_Code;
    private int State_Code;
    private int Country_Code;
    private int District_code;
    private String Mobile;
    private Date DOB;
    private Date DOR;
}
