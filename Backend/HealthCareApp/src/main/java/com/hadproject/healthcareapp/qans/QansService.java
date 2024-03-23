package com.hadproject.healthcareapp.qans;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

import static ch.qos.logback.classic.spi.ThrowableProxyVO.build;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class QansService {
    private final QuestionRepository questionRepository;
    private final AnswersRepository answersRepository;
    private final UserRepository userRepository;

    public String postQuestion(QuestionRequest request){
        var user = userRepository.findById(request.getUid()).orElseThrow(() -> new RuntimeException("User not found"));

        var question = Question.builder()
                .u_id(user)
                .QuestionText(request.getQuestion_text())
                .tags(request.getTags())
                .date(String.valueOf(new Date()))
                .flag(request.getFlag())
                .build();

          try{
              questionRepository.save(question);
              return "Question posted successfully!";
          } catch (Exception e) {
              System.out.println(e+"");
              return "Failed to post question";
          }
    }

    public String postAnswer(AnsRequest ansrequest){
        var user = userRepository.findById(ansrequest.getUid()).orElseThrow(() -> new RuntimeException("User not found"));

        var question = questionRepository.findById( ansrequest.getQ_id()).orElseThrow(() -> new RuntimeException("Question not found"));

        var answers = Answers.builder()
                .q_id( question)
                .u_id(user)
                .answers_text(ansrequest.getAnswers_text())
                .date(String.valueOf(new Date()))
                .flag(ansrequest.getFlag())
                .upvotes(0)
                .build();

        try{
            answersRepository.save(answers);
            return "Answer posted successfully!";
        } catch (Exception e) {
            System.out.println(e+"");
            return "Failed to post answer";
        }
    }

    public String flagAnswer(int answerId){
        Optional<Answers> optionalAnswer = answersRepository.findById(answerId);
        if(optionalAnswer.isPresent()){
            Answers answer = optionalAnswer.get();
            answer.setFlag(1);
            answersRepository.save(answer);
            return "Answer flagged successfully!";
        } else {
            throw new RuntimeException("Answer not found with ID: " + answerId);
        }
    }
    public String upvoteAnswer(int answerId){
        Optional<Answers> optionalAnswer = answersRepository.findById(answerId);
        if(optionalAnswer.isPresent()){
            Answers answer = optionalAnswer.get();
            int currentUpvotes = answer.getUpvotes();
            answer.setUpvotes(currentUpvotes+1);
            answersRepository.save(answer);
            return "Upvote incremented successfully";
        }  else {
            throw new RuntimeException("Answer not found with ID:" +answerId);
        }

    }
    public List<FlaggedAnswerResponse> getAllFlaggedAnswers() {
        List<Answers> flaggedAnswers = answersRepository.findByFlag(1);
        List<FlaggedAnswerResponse> flaggedAnswerResponses = new ArrayList<>();

        if(flaggedAnswers != null)
        {
            for(Answers answer : flaggedAnswers){
                FlaggedAnswerResponse  response = FlaggedAnswerResponse.builder()
                        .id(answer.getId())
                        .answers_text(answer.getAnswers_text())
                        .build();
                flaggedAnswerResponses.add(response);
            }
        }else {
            // Handle the case when no flagged answers are found
            // For example, you can return an empty list
            return Collections.emptyList();
        }
        return flaggedAnswerResponses;

    }
}
