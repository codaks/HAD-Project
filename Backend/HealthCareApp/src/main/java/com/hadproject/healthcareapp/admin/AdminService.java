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
}
