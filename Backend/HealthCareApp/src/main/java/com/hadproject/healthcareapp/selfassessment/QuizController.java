package com.hadproject.healthcareapp.selfassessment;

import com.hadproject.healthcareapp.Header.Header;
import lombok.RequiredArgsConstructor;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/selfAssisgment")
@RequiredArgsConstructor
@ControllerAdvice
public class QuizController {

    private final QuizService service;

    @GetMapping("/getQuestions")
    public ResponseEntity<List<QuestionsResponse>> getQuestion(){
        List<QuestionsResponse> question = service.getQuestion();
        return ResponseEntity.ok(question);
    }

//    @PostMapping("/evaluateResult")
//    public ResponseEntity<String> evaluate(@RequestBody EvaluateResponse evaluateRequest) {
//        if (evaluateRequest == null) {
//            return ResponseEntity.badRequest().body("selectedOptions field is missing or null");
//        }else{
//            System.out.println("********************************");
//        }
//
//        String result = service.evaluate(evaluateRequest.getSelectedOptions());
//        return ResponseEntity.ok(result);
//    }
@PostMapping("/evaluateResult")
public ResponseEntity<Map<String, Object>> evaluate(@RequestBody  EvaluateResponse evaluateRequest , @RequestHeader("Authorization") String token) {
    if (evaluateRequest == null || evaluateRequest.getSelectedOptions() == null) {
        return ResponseEntity.badRequest().body(null);
    }

    Map<String, Object> result = service.evaluate(evaluateRequest.getSelectedOptions(), token);
    return ResponseEntity.ok(result);
}

//    @GetMapping("/getAllQuizResults/{userId}")
//    public ResponseEntity<List<AnswersResponse>> getAllQuizResponse(@PathVariable Integer userId){
//        List<AnswersResponse> response = service.getAllQuizResponse(userId);
//        return ResponseEntity.ok(response);
//    }
}




