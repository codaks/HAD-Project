package com.hadproject.healthcareapp.qans;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/v1/qaresponse")
@RequiredArgsConstructor
public class  QansController {

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

    }

    @PostMapping("/flagresponse")
    public ResponseEntity<String> flagAnswer(@RequestBody Map<String, Integer> requestBody) {
        int answerId =requestBody.get("id");
        String result = service.flagAnswer(answerId);
        return ResponseEntity.ok(result);
    }
    @PostMapping("/upvote")
    public ResponseEntity<String>  upvoteAnswer(@RequestBody Map<String , Integer> requestBody){
        int answerId = requestBody.get("id");
        String result = service.upvoteAnswer(answerId);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/flagresponse")
    public ResponseEntity<List<FlaggedAnswerResponse>> getAllFlaggedAnswers(){
        List<FlaggedAnswerResponse> flaggedAnswers = service.getAllFlaggedAnswers();
        return ResponseEntity.ok(flaggedAnswers);
    }
//    @GetMapping("/allQuestions")
//    public ResponseEntity<List<QuesResponse>> getAlLQuestions
}
