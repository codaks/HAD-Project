package com.hadproject.healthcareapp.admin;

import com.hadproject.healthcareapp.auth.AuthenticationService;
import com.hadproject.healthcareapp.department.Department;
import com.hadproject.healthcareapp.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {


    @Autowired
    private final AdminService adminService;

    @GetMapping("/getcount/{role}")
    public Integer getCount(@PathVariable Role role) {
        System.out.println("******************************** Role is HEre ********************************");
        int data = adminService.analytics(role);
        return data;
    }
    //    @GetMapping("/getentries/{role}")
//    public List<RoleListResponse> authenticateMultiple(@PathVariable Role role)
//    {
//        List<RoleListResponse> authResponses = AdminService.processMultipleAuthenticationResponses(authRequests);
//        return authResponses;
//    }
}
