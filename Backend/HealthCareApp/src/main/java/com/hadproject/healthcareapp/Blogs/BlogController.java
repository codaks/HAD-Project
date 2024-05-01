package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.token.Token;
import com.hadproject.healthcareapp.token.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/blogs/")
public class BlogController {

    @Autowired
    BlogService blogService;
    TokenRepository tokenRepository;

    @PostMapping("/AddBlog/{BlogItem}")
    public ResponseEntity<String> AddBlog(@RequestHeader("Authorization") String token,
                                          @RequestBody BlogRequest blogRequest ) {
        System.out.println("*************************TESTING**************************************");
        try {
            String jwtToken;

            jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            String str = blogService.AddBlog(userId, blogRequest);
            return ResponseEntity.ok(str);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to add to wish list: " + e.getMessage());
        }
    }

    private int getUserIdFromToken(String jwtToken) {
        // Query the database to find the Token entity associated with the provided JWT tokeN
        Optional<Token> tokenOptional = tokenRepository.findByToken(jwtToken);

        // Check if the token entity is found
        if (tokenOptional.isPresent()) {
            Token tokenEntity = tokenOptional.get();
            // Check if the token is revoked or expired
            if (!tokenEntity.isRevoked() && !tokenEntity.isExpired()) {
                // If not revoked and not expired, return the user ID associated with the token
                return tokenEntity.getUser().getId();
            } else {
                // Token is either revoked or expired, return -1 or handle accordingly
                return -1; // Or handle differently based on your requirements
            }
        } else {
            // Token not found in the table
            return -1; // Return an error value or handle differently based on your requirements
        }
    }

}
