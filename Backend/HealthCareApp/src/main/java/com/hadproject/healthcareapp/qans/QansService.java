package com.hadproject.healthcareapp.qans;

import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class QansService {
    private final QuestionRepository questionRepository;
    private final AnswersRepository answersRepository;
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailRepository;

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
                .questionid( question)
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

    public String flagQuestion(int questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        if(optionalQuestion.isPresent()){
            Question question = optionalQuestion.get();
            question.setFlag(1);
            questionRepository.save(question);
            return "Question flagged successfully";

        }else{
            throw new RuntimeException("Question not found with the ID" + questionId);
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
                FlaggedAnswerResponse response = FlaggedAnswerResponse.builder()
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
    public List<QuestionResponse> getAllFlaggedQuestions() {
        List<Question> flaggedQuestions = questionRepository.findByFlag(1); // Assuming flag value of true represents flagged questions
        List<QuestionResponse> QuestionResponses = new ArrayList<>();

        if (flaggedQuestions != null && !flaggedQuestions.isEmpty()) {
            for (Question question : flaggedQuestions) {
                QuestionResponse response = QuestionResponse.builder()
                        .id(question.getId())
                        .QuestionText(question.getQuestionText())
                        .build();
                QuestionResponses.add(response);
            }
        } else {
            // Handle the case when no flagged questions are found
            // For example, you can return an empty list
            return Collections.emptyList();
        }
        return QuestionResponses;
    }

    public List<QuestionResponse>  getAllQuestion(){
        List<Question> questions = questionRepository.findAll();
        List<QuestionResponse> questionResponses = new ArrayList<>();

        if(!questions.isEmpty()){

            for(Question question: questions){
                QuestionResponse response = QuestionResponse.builder()
                        .id(question.getId())
                        .QuestionText(question.getQuestionText())
                        .build();
                questionResponses.add(response);
            }
        }
        else{
            return Collections.emptyList();
        }
        return questionResponses;
    }



    public Optional<List<AnswerResponse>> getAllResponses(int questionId ){
                try {
                    var ques = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("User not found"));
                    System.out.println("****************  Question id is  :"+questionId+" "+ques.getQuestionText());
                    Optional<List<Answers>> optionalAnswers = Optional.ofNullable(answersRepository.findByQuestionid(ques));
                    if (optionalAnswers.isPresent()) {
                        System.out.println("Heyyyyyyyyyyyyyyyyyyyy I got Some Answers");
                        List<AnswerResponse> answerResponses = new ArrayList<>();
                        List<Answers> answers = optionalAnswers.get();
                        for (Answers answer : answers) {
                            // Retrieve the UserDetail entity corresponding to the answer's u_id

                            System.out.println(answer.getAnswers_text());
                            Optional<UserDetail> optionalUserDetail = userDetailRepository.findByUid(answer.getU_id());
                            if (optionalUserDetail.isPresent()) {
                                System.out.println("************* I also Got the user");
                                UserDetail userDetail = optionalUserDetail.get();
                                // Extract the username from the UserDetail entity
                                String username = userDetail.getFname();

                                // Create the AnswerResponse object
                                AnswerResponse response = AnswerResponse.builder()
                                        .id(answer.getId())
                                        .name(username)
                                        .answers_text(answer.getAnswers_text())
                                        .date(answer.getDate())
                                        .flag(answer.getFlag())
                                        .upvotes(answer.getUpvotes())
                                        .build();
                                answerResponses.add(response);
                            }
                        }
                        return Optional.of(answerResponses);
                    } else {
                        // If no responses found for the given question ID, return Optional.empty()
                        return Optional.empty();
                    }
                } catch (Exception e) {
                    // Handle any exceptions and log the error
                    e.printStackTrace();
                    return Optional.empty();
                }
            }
}
