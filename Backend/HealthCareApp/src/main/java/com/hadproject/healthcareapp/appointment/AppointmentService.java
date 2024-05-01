package com.hadproject.healthcareapp.appointment;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hadproject.healthcareapp.admin.RoleProfileResponse;
import com.hadproject.healthcareapp.appointment.AppointmentRequest;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.*;

@Builder
@RequiredArgsConstructor
@Service
public class AppointmentService {

    @Autowired
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;
    private AppointmentRepository appointmentRepository;

    private final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @Autowired
    public AppointmentService(UserRepository userRepository, UserDetailRepository userDetailsRepository, AppointmentRepository appointmentRepository) {
        this.userRepository = userRepository;
        this.userDetailsRepository = userDetailsRepository;
        this.appointmentRepository = appointmentRepository;
    }

    public String sendAppointmentRequest(AppointmentRequest appointmentRequest) {
        int patientId = appointmentRequest.getPatient_ID();
        int expertId = appointmentRequest.getExpert_ID();
        System.out.println("******************************** HII I m gramya , patientID ********************************");
        System.out.println("Patient ID: " + patientId);
        System.out.println("expert ID: " + expertId);
        LocalDate date = appointmentRequest.getDate();
        LocalTime time = appointmentRequest.getTime();

        // Create an appointment entity
        Appointment appointment = Appointment.builder()
                .date(date)
                .time(time)
                .patientId(patientId)
                .expertId(expertId)
                .build();

        // Save the appointment
        appointmentRepository.save(appointment);

        return "Request Sent";
    }


    public String acceptAppointment(Integer id) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);
        if (appointmentOptional.isPresent()) {
            return "Appointment Accepted";
        } else {
            return "Appointment not found";
        }
    }

    public String rejectAppointment(Integer id) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);
        if (appointmentOptional.isPresent()) {
            Appointment appointment = appointmentOptional.get();
            appointmentRepository.delete(appointment);
            return "Appointment Rejected";
        } else {
            return "Appointment not found";
        }
    }

    public Optional<List<Appointment>> getAppointmentsByDate(LocalDate date) {
        try {
            return appointmentRepository.findByDate(date);
        } catch (Exception ex) {
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    public Optional<List<RoleBasedAppointmentResponse>> viewAppointmentDetails(Integer expertId) {
        try {
            System.out.println("************************  Inside The View Appointment Data   ************************");

            List<Appointment> appointments = appointmentRepository.findByExpertId(expertId);
            List<RoleBasedAppointmentResponse> appointmentResponses = new ArrayList<>();

            for (Appointment appointment : appointments) {
                User user = new User(); // Assuming you have a constructor or builder for User
                user.setId(appointment.getPatientId()); // Set the id of the User object

                Optional<UserDetail> userDetailOptional = userDetailsRepository.findByUid(user);
                if (userDetailOptional.isPresent()) {

                    UserDetail userDetail = userDetailOptional.get();
                    appointmentResponses.add(RoleBasedAppointmentResponse.builder()
                            .Name(userDetail.getFname() + " " + userDetail.getLname())
                            .Date(appointment.getDate())
                            .Time(appointment.getTime())
                            .build());
                } else {
                    System.err.println("UserDetail not found for PatientId: " + appointment.getPatientId());
                }
            }

            return Optional.of(appointmentResponses);
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Error processing viewProfileDetails: " + e.getMessage());
            e.printStackTrace();
            return Optional.empty();
        }
    }


    public Optional<List<RoleBasedAppointmentResponse>> viewAppointmentDetails2(Integer patientId) {
        try {
            System.out.println("************************  Inside The View Appointment Data   ************************");

            List<Appointment> appointments = appointmentRepository.findByPatientId(patientId);
            List<RoleBasedAppointmentResponse> appointmentResponses = new ArrayList<>();

            for (Appointment appointment : appointments) {
                User user = new User(); // Assuming you have a constructor or builder for User
                user.setId(appointment.getExpertId()); // Set the id of the User object

                Optional<UserDetail> userDetailOptional = userDetailsRepository.findByUid(user);
                if (userDetailOptional.isPresent()) {

                    UserDetail userDetail = userDetailOptional.get();
                    appointmentResponses.add(RoleBasedAppointmentResponse.builder()
                            .Name(userDetail.getFname() + " " + userDetail.getLname())
                            .Date(appointment.getDate())
                            .Time(appointment.getTime())
                            .build());
                } else {
                    System.err.println("UserDetail not found for PatientId: " + appointment.getPatientId());
                }
            }

            return Optional.of(appointmentResponses);
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Error processing viewProfileDetails: " + e.getMessage());
            e.printStackTrace();
            return Optional.empty();
        }
    }

//    public Optional<List<RoleBasedAppointmentResponse>> viewAppointmentDetails(String token) {
//        try {
//            String[] tokenParts = token.split("\\.");
//            String payload = tokenParts[1];
//            String decodedPayload = new String(Base64.getUrlDecoder().decode(payload));
//
//            // Parse the decoded payload into JSON
//            ObjectMapper mapper = new ObjectMapper();
//            Map<String, Object> claims = mapper.readValue(decodedPayload, new TypeReference<Map<String, Object>>(){});
//
//            String userId = (String) claims.get("sub");
//
//            // Log the userId to verify it
//            System.out.println("User ID from token: " + userId);
//
//            List<Appointment> appointments;
//            if (isExpert(userId)) {
//                appointments = appointmentRepository.findByExpertId(Integer.parseInt(userId));
//            } else {
//                appointments = appointmentRepository.findByPatientId(Integer.parseInt(userId));
//            }
//
//            List<RoleBasedAppointmentResponse> appointmentResponses = new ArrayList<>();
//            for (Appointment appointment : appointments) {
//                User user = new User(); // Assuming you have a constructor or builder for User
//                if (isExpert(userId)) {
//                    user.setId(appointment.getPatientId());
//                } else {
//                    user.setId(appointment.getExpertId());
//                }
//
//                Optional<UserDetail> userDetailOptional = userDetailsRepository.findByUid(user);
//                if (userDetailOptional.isPresent()) {
//                    UserDetail userDetail = userDetailOptional.get();
//                    appointmentResponses.add(RoleBasedAppointmentResponse.builder()
//                            .Name(userDetail.getFname() + " " + userDetail.getLname())
//                            .Date(appointment.getDate())
//                            .Time(appointment.getTime())
//                            .build());
//                } else {
//                    System.err.println("UserDetail not found for PatientId: " + appointment.getPatientId());
//                }
//            }
//
//            return Optional.of(appointmentResponses);
//
//        } catch (Exception e) {
//            // Log and handle the exception
//            System.err.println("Error processing appointment details: " + e.getMessage());
//            return Optional.empty();
//        }
//    }
//
//
//
//    private boolean isExpert(String userId) {
//        try {
//            Jws<Claims> claims = Jwts.parserBuilder()
//                    .setSigningKey(secretKey)
//                    .build()
//                    .parseClaimsJws(userId); // Pass the token here instead of userId
//
//            String role = (String) claims.getBody().get("role");
//
//            // Log the role to verify it
//            System.out.println("Role from token: " + role);
//
//            // Assuming "expert" is the role for experts
//            return "expert".equals(role);
//
//        } catch (Exception e) {
//            // Log and handle the exception
//            System.err.println("Error checking expert role: " + e.getMessage());
//            return false;
//        }
    }












