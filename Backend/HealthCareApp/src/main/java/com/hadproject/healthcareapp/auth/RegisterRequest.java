package com.hadproject.healthcareapp.auth;

import com.hadproject.healthcareapp.user.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String fname;
  private String mname;
  private String lname;
  private String email;
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

  @Enumerated(EnumType.STRING)
  private Role role;
}
