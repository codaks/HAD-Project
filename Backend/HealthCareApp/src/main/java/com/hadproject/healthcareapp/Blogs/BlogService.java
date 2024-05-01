package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.token.Token;
import com.hadproject.healthcareapp.token.TokenRepository;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import io.jsonwebtoken.Jwt;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;


@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BlogService {

    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;
    private BlogRepository blogRepository;
    private TokenRepository tokenRepository;


//    public BlogService(UserRepository userRepository, UserDetailRepository userDetailsRepository, BlogRepository blogRepository) {
//        this.userRepository = userRepository;
//        this.userDetailsRepository = userDetailsRepository;
//        this.blogRepository = blogRepository;
//    }
//
public String AddBlog(int userId, BlogRequest blogRequest) {
    // Get user details
    Optional<User> optionalUser = userRepository.findById(userId);
    if (optionalUser.isEmpty()) {
        return "Unable to add: User not found with ID: " + userId;
    }
    User user = optionalUser.get();

    // Check if the user is an expert
    if (user.getRole().equals("EXPERT")) {
        // Fetch fname and lname from UserDetail table
        Optional<UserDetail> optionalUserDetail = userDetailsRepository.findById(userId);
        if (optionalUserDetail.isEmpty()) {
            return "Unable to add: User details not found for ID: " + userId;
        }
        UserDetail userDetail = optionalUserDetail.get();
        String author = userDetail.getFname() + " " + userDetail.getLname();

        // Create a new blog entry using the builder pattern
        Blog blog = Blog.builder()
                .BlogItem(blogRequest.getBlogItem())
                .author(author)
                .build();

        // Save the blog entry
        blogRepository.save(blog);

        return "Blog added Successfully";
    } else {
        return "User is not an expert. Cannot add blog entry.";
    }
}


}
