package com.hadproject.healthcareapp.qans;

import java.util.List;

import com.hadproject.healthcareapp.Courses.Courses;
import com.hadproject.healthcareapp.employee.Employee;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

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

    @PostMapping("/flagquestion")
    public ResponseEntity<String> flagQuestion(@RequestBody Map<String,Integer> requestBody){
        int questionId = requestBody.get("id");
        String result = service.flagQuestion(questionId);
        return ResponseEntity.ok(result);
    }


    @PostMapping("/upvote")
    public ResponseEntity<String>  upvoteAnswer(@RequestBody Map<String , Integer> requestBody){
        int answerId = requestBody.get("id");
        String result = service.upvoteAnswer(answerId);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/flaggedallresponse")
    public ResponseEntity<List<FlaggedAnswerResponse>> getAllFlaggedAnswers(){
        List<FlaggedAnswerResponse> flaggedAnswers = service.getAllFlaggedAnswers();
        return ResponseEntity.ok(flaggedAnswers);
    }

    @GetMapping("/flaggedallquestions")
    public ResponseEntity<List<QuestionResponse >> getAllFlaggedQuestions() {
        List<QuestionResponse> flaggedQuestions = service.getAllFlaggedQuestions();
        return ResponseEntity.ok(flaggedQuestions);
    }

    @GetMapping("/allQuestions")
    public ResponseEntity<List<QuestionResponse>>  getAllQuestion(){
        List<QuestionResponse>  response = service.getAllQuestion();
        return ResponseEntity.ok(response);
    }

// }
//    @GetMapping("/responses/{questionId}")
//    public Optional<List<AnswerResponse>> getAllAnswers(@PathVariable Integer questionId){
//        Optional<List<AnswerResponse>> responses = service.getAllResponses(questionId);
//        return responses;
//    }
}
