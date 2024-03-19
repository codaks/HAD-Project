package com.hadproject.healthcareapp.qans;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/qaresponse")
@RequiredArgsConstructor
public class QansController {

    private final QansService service;

    @PostMapping("/addquestion")
    public ResponseEntity<String> postQuestion(@RequestBody QuestionRequest request) {
        String result = service.postQuestion(request);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/postresponse")
    public ResponseEntity<String> postAnswer(@RequestBody AnsRequest ansRequest) {
        String result = service.postAnswer(ansRequest);
        return ResponseEntity.ok(result);

        @PostMapping("/flagresponse")
        public ResponseEntity<String> flagAnswer(@RequestBody Answers flagAns) {
            String result = service.flagAnswer(flagAns);
            return ResponseEntity.ok(result);
        }

    }
}
