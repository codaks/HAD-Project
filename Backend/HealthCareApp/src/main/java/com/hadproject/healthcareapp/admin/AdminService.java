package com.hadproject.healthcareapp.admin;


import com.hadproject.healthcareapp.user.Role;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {


    @Autowired
    private final UserRepository userRepository;



    public Integer analytics(Role role) {
        Optional<List<User>> count = userRepository.findByRole(role);
        if (count.isPresent()) {
            List<User> userList = count.get();
            int size = userList.size();
            return size;
        }
        return 0;
    }
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
}
