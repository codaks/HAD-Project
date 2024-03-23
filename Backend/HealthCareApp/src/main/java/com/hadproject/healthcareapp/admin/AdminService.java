package com.hadproject.healthcareapp.admin;


import com.hadproject.healthcareapp.user.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {


    @Autowired
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;


    public Integer analytics(Role role) {
        Optional<List<User>> count = userRepository.findByRole(role);
        if (count.isPresent()) {
            List<User> userList = count.get();
            int size = userList.size();
            return size;
        }
        return 0;
    }
    // New functionality to list users by role
    public Optional<List<RoleListResponse>> getUsersByRole(Role role) {
        Optional<List<User>> userDetails = Optional.empty();
        List<UserDetail> userDetail = new ArrayList<UserDetail>();

        try {
            userDetails = userRepository.findByRole(role);
            if(userDetails.isPresent()){
                List<User> userList = userDetails.get();
                for(User user: userList){
                    UserDetail userd = userDetailsRepository.getById(user.getId());
                    userDetail.add(userd);
                }
            }

            List<RoleListResponse> roleListResponses=new ArrayList<>();
            for(UserDetail userDetail1 :userDetail){
                RoleListResponse response=RoleListResponse.builder().name(userDetail1.getFname())
                        .gender(userDetail1.getGender())
                        .contact_no(userDetail1.getMobile()).build();

                roleListResponses.add(response);
            }

            return Optional.of(roleListResponses);
        }
        catch(Exception ex) {
            ex.printStackTrace();
            return Optional.empty();
        }
    }


    }

//    public Optional<UserDetail> getProfileByRole(Role role) {
//        Optional<User> optionalUsers = userRepository.findByRole(role);
//        List<UserDetail> userDetailsList = new ArrayList<>();
//
//        if (optionalUsers.isPresent()) {
//            List<User> users = optionalUsers.get();
//            for (User user : users) {
//                Optional<UserDetail> userDetail = userDetailsRepository.findById(user.getId());
//                userDetail.ifPresent(userDetailsList::add);
//            }
//        }
//
//        return userDetailsList;
//    }




    //    public List<RoleListResponse> processMultipleAuthenticationResponses(List< RoleListResponse> authResponses) {
//        List< RoleListResponse> processedResponses = new ArrayList<>();
//
//        for ( RoleListResponse authResponse : authResponses) {
//            // Extract necessary data from the authentication response
//            // For example, assuming user_id, request, jwtToken, and refreshToken are accessible from authResponse
//
//            // Create a new UserDetail instance for each response
//
//            var userDetail = UserDetail.builder()
//                    .uid(user_id)
//                    .fname(request.getFname())
//                    .gender(request.getGender())
//                    .Mobile(request.getMobile()
//                    .build();
//
//            // Save the user detail
//            var detailSaved = userDetailRepository.save(userDetail);
//
//            // Construct a new AuthenticationResponse with appropriate data
////            var processedResponse =  RoleListResponse.builder()
////                    .accessToken(jwtToken)
////                    .refreshToken(refreshToken)
////                    .id(user_id.getId())
////                    .role(request.getRole().toString())
////                    .build();
//
//            // Add the processed response to the list
//            processedResponses.add(processedResponse);
//        }
//
//        return processedResponses;
//    }

